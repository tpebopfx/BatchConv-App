import os
import socket
import threading
import time

from flask import Flask, jsonify, request, send_from_directory

from config import DOWNLOAD_FOLDER, UI_DIR, UPLOAD_FOLDER
from task_manager import TaskManager

app = Flask(__name__)
manager = TaskManager()


def prune_temp_cache(max_age_hours: int = 24) -> None:
    """Remove stale temporary files so the app does not accumulate cache."""
    cutoff = time.time() - (max_age_hours * 3600)
    for folder in (UPLOAD_FOLDER, DOWNLOAD_FOLDER):
        if not os.path.exists(folder):
            continue
        for root, _, files in os.walk(folder):
            for name in files:
                path = os.path.join(root, name)
                try:
                    if os.path.getmtime(path) < cutoff:
                        os.remove(path)
                except Exception:
                    pass


@app.route('/')
def index():
    return send_from_directory(UI_DIR, 'index.html')


@app.route('/<path:path>')
def serve_ui_files(path):
    return send_from_directory(UI_DIR, path)


@app.route('/api/convert', methods=['POST'])
def convert_file():
    if 'file' not in request.files:
        return jsonify({"status": "error", "message": "Нет файла"}), 400

    file = request.files['file']
    raw_target = request.form.get('target_format', '')
    target_format = raw_target.lower().replace('.', '').strip()

    input_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(input_path)

    task_id = manager.start_task(file.filename, target_format)
    return jsonify({"status": "success", "task_id": task_id})


@app.route('/api/status/<task_id>', methods=['GET'])
def get_status(task_id):
    status = manager.get_task_status(task_id)
    if status:
        return jsonify(status)
    return jsonify({"status": "error", "message": "Задача не найдена"}), 404


@app.route('/api/control', methods=['POST'])
def control_task():
    data = request.json or {}
    task_id = data.get('task_id')
    action = data.get('action')

    if not task_id or not action:
        return jsonify({"status": "error", "message": "Неверные параметры"}), 400

    if action == 'pause':
        success = manager.pause_task(task_id)
    elif action == 'resume':
        success = manager.resume_task(task_id)
    elif action == 'cancel':
        success = manager.cancel_task(task_id)
    else:
        success = False

    return jsonify({"status": "success" if success else "error"})


def run_server() -> None:
    prune_temp_cache()
    app.run(host='127.0.0.1', port=5000, debug=False, use_reloader=False, threaded=True)


def wait_for_port(host: str = '127.0.0.1', port: int = 5000, timeout: float = 20.0) -> bool:
    start = time.time()
    while time.time() - start < timeout:
        try:
            with socket.create_connection((host, port), timeout=0.35):
                return True
        except OSError:
            time.sleep(0.15)
    return False


def launch_android_webview() -> None:
    """Open the local Flask UI in an Android WebView."""
    from jnius import autoclass

    PythonActivity = autoclass('org.kivy.android.PythonActivity')
    WebView = autoclass('android.webkit.WebView')
    WebViewClient = autoclass('android.webkit.WebViewClient')

    activity = PythonActivity.mActivity
    webview = WebView(activity)
    settings = webview.getSettings()
    settings.setJavaScriptEnabled(True)
    settings.setDomStorageEnabled(True)
    settings.setAllowFileAccess(True)
    settings.setAllowContentAccess(True)
    settings.setSupportZoom(False)
    webview.setWebViewClient(WebViewClient())

    def _show():
        activity.setContentView(webview)
        webview.loadUrl('http://127.0.0.1:5000/')

    activity.runOnUiThread(_show)


def run_android_launcher() -> None:
    from kivy.app import App
    from kivy.animation import Animation
    from kivy.clock import Clock
    from kivy.core.window import Window
    from kivy.graphics import Color, Line, RoundedRectangle
    from kivy.metrics import dp
    from kivy.uix.boxlayout import BoxLayout
    from kivy.uix.label import Label
    from kivy.uix.progressbar import ProgressBar
    from kivy.uix.widget import Widget

    Window.clearcolor = (0.04, 0.04, 0.05, 1)

    class LoadingRing(Widget):
        def __init__(self, **kwargs):
            super().__init__(**kwargs)
            self._angle = 0
            with self.canvas:
                Color(0.93, 0.27, 0.27, 0.12)
                self.bg = RoundedRectangle(pos=self.pos, size=self.size, radius=[dp(24)])
                Color(0.93, 0.27, 0.27, 1)
                self.line = Line(circle=(0, 0, 0), width=1.8)
            self.bind(pos=self._redraw, size=self._redraw)
            Clock.schedule_interval(self._spin, 1 / 60)

        def _redraw(self, *_):
            self.bg.pos = self.pos
            self.bg.size = self.size
            x, y = self.center
            radius = min(self.width, self.height) / 2.15
            self.line.circle = (x, y, radius, self._angle, self._angle + 110)

        def _spin(self, dt):
            self._angle = (self._angle + 3.6) % 360
            self._redraw()

    class SplashRoot(BoxLayout):
        def __init__(self, **kwargs):
            super().__init__(orientation='vertical', padding=dp(24), spacing=dp(14), **kwargs)
            self.size_hint = (1, 1)
            self._dots = 0
            self._bg_rect = None
            self._card_rect = None
            self._card_border = None

            with self.canvas.before:
                Color(0.04, 0.04, 0.05, 1)
                self._bg_rect = RoundedRectangle(pos=self.pos, size=self.size)
            self.bind(pos=self._sync_bg, size=self._sync_bg)

            self.add_widget(Widget(size_hint_y=0.16))

            card = BoxLayout(orientation='vertical', spacing=dp(14), padding=[dp(20), dp(22)], size_hint=(1, 0.66))
            with card.canvas.before:
                Color(0.09, 0.09, 0.11, 0.98)
                self._card_rect = RoundedRectangle(pos=card.pos, size=card.size, radius=[dp(28)])
                Color(0.19, 0.19, 0.21, 1)
                self._card_border = Line(rounded_rectangle=(card.x, card.y, card.width, card.height, dp(28)), width=1.1)
            card.bind(pos=self._sync_card, size=self._sync_card)

            ring_row = BoxLayout(size_hint_y=0.42)
            ring_row.add_widget(Widget())
            ring_row.add_widget(LoadingRing(size_hint=(None, None), size=(dp(108), dp(108))))
            ring_row.add_widget(Widget())
            card.add_widget(ring_row)

            card.add_widget(Label(text='[b]BatchConv[/b]', markup=True, font_size='26sp', color=(1, 1, 1, 1), size_hint_y=None, height=dp(34)))

            subtitle = Label(
                text='Умная обработка файлов\\nТочный прогресс • Пауза • Отмена',
                font_size='13sp',
                color=(0.75, 0.75, 0.78, 1),
                halign='center',
                valign='middle',
            )
            subtitle.bind(size=lambda inst, val: setattr(inst, 'text_size', (inst.width, None)))
            card.add_widget(subtitle)

            self.status = Label(
                text='Запуск локального ядра...',
                font_size='12sp',
                color=(0.93, 0.27, 0.27, 1),
                size_hint_y=None,
                height=dp(24),
            )
            card.add_widget(self.status)

            self.progress = ProgressBar(max=100, value=0, size_hint_y=None, height=dp(10))
            card.add_widget(self.progress)

            self.hint = Label(
                text='Подготовка интерфейса',
                font_size='11sp',
                color=(0.7, 0.7, 0.72, 1),
                size_hint_y=None,
                height=dp(20),
            )
            card.add_widget(self.hint)

            self.add_widget(card)
            self.add_widget(Widget(size_hint_y=0.16))

            self._anim = Animation(value=100, duration=1.05) + Animation(value=0, duration=1.05)
            self._anim.repeat = True
            self._anim.start(self.progress)

            Clock.schedule_interval(self._advance_text, 0.35)
            Clock.schedule_once(self._start_server, 0.1)
            Clock.schedule_interval(self._poll_ready, 0.18)

        def _sync_bg(self, *_):
            self._bg_rect.pos = self.pos
            self._bg_rect.size = self.size

        def _sync_card(self, inst, *_):
            self._card_rect.pos = inst.pos
            self._card_rect.size = inst.size
            self._card_border.rounded_rectangle = (inst.x, inst.y, inst.width, inst.height, dp(28))

        def _advance_text(self, dt):
            self._dots = (self._dots + 1) % 4
            self.status.text = f'Запуск локального ядра{"." * self._dots}'
            phrases = ['Проверка модулей', 'Подключение UI', 'Подготовка WebView', 'Очистка кэша']
            self.hint.text = phrases[self._dots % len(phrases)]

        def _start_server(self, dt):
            threading.Thread(target=run_server, daemon=True).start()

        def _poll_ready(self, dt):
            self.progress.value = (self.progress.value + 7) % 100
            if wait_for_port(timeout=0.01):
                self.status.text = 'Интерфейс готов'
                self.hint.text = 'Открываем приложение...'
                Clock.schedule_once(lambda *_: launch_android_webview(), 0.15)
                return False
            return True

    class BatchConvBoot(App):
        def build(self):
            return SplashRoot()

    BatchConvBoot().run()


if __name__ == '__main__':
    try:
        from kivy.utils import platform
    except Exception:
        platform = 'unknown'

    if platform == 'android':
        run_android_launcher()
    else:
        print("\n" + "=" * 50)
        print("  МОДУЛЬНЫЙ СЕРВЕР BATCHCONV УСПЕШНО ЗАПУЩЕН")
        print(f"  Папка сохранения: {DOWNLOAD_FOLDER}")
        print("=" * 50 + "\n")
        run_server()
