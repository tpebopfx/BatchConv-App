import os

# Корневая папка скрипта
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# ПАПКА ИНТЕРФЕЙСА (с UI_DIR)
UI_DIR = os.path.join(BASE_DIR, "ui")

# Папка для временного кэша (куда загружаются файлы с телефона)
UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")

# УМНЫЙ ВЫБОР ПАПКИ ДЛЯ ГОТОВЫХ ФАЙЛОВ
ANDROID_DOWNLOAD_DIR = "/storage/emulated/0/Download"

if os.path.exists(ANDROID_DOWNLOAD_DIR):
    # Если мы на Android/Termux, создаем публичную папку в Загрузках
    DOWNLOAD_FOLDER = os.path.join(ANDROID_DOWNLOAD_DIR, "BatchConv")
else:
    # Фолбэк для ПК/тестов, если запускается вне Android
    DOWNLOAD_FOLDER = os.path.join(BASE_DIR, "downloads")

# Гарантируем создание папок
for folder in [UPLOAD_FOLDER, DOWNLOAD_FOLDER]:
    if not os.path.exists(folder):
        try:
            os.makedirs(folder, exist_ok=True)
        except Exception as e:
            print(f"[КРИТИЧЕСКАЯ ОШИБКА] Не удалось создать папку {folder}: {e}")

# Списки поддерживаемых форматов
IMAGE_FORMATS = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'tiff', 'heic', 'heif', 'avif', 'ico']
AUDIO_FORMATS = ['mp3', 'wav', 'flac', 'ogg', 'aac', 'm4a', 'wma', 'opus']
VIDEO_FORMATS = ['mp4', 'webm', 'mkv', 'avi', 'mov', 'flv', 'm4v', '3gp', 'mpg', 'mpeg', 'ts']

