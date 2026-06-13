import subprocess
from pathlib import Path
from PIL import Image

def convert_image(input_path: str, output_path: str) -> bool:
    """Конвертация изображений с помощью Pillow"""
    try:
        img = Image.open(input_path)
        # Если сохраняем в JPG, а исходник с прозрачностью (PNG/WEBP), конвертируем в RGB
        output_ext = Path(output_path).suffix.lower()
        if output_ext in ['.jpg', '.jpeg'] and img.mode in ('RGBA', 'P'):
            img = img.convert('RGB')
            
        img.save(output_path)
        return True
    except Exception as e:
        print(f"Ошибка при конвертации картинки: {e}")
        return False

def convert_media(input_path: str, output_path: str) -> bool:
    """Конвертация видео и аудио с помощью FFmpeg"""
    # Команда для запуска ffmpeg
    command = [
        'ffmpeg',
        '-y',  # Автоматически перезаписывать файл, если он уже есть
        '-i', input_path,  # Входной файл
        output_path  # Выходной файл
    ]
    
    try:
        # Запускаем процесс без вывода лишних логов в консоль
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        if result.returncode == 0:
            return True
        else:
            print(f"Ошибка FFmpeg: {result.stderr.decode('utf-8')}")
            return False
    except FileNotFoundError:
        print("Ошибка: FFmpeg не установлен в системе!")
        return False
    except Exception as e:
        print(f"Непредвиденная ошибка: {e}")
        return False

def process_file(input_path: str, output_path: str, file_type: str) -> bool:
    """Главная функция, которая решает, чем конвертировать файл"""
    if file_type == 'image':
        return convert_image(input_path, output_path)
    elif file_type in ['video', 'audio']:
        return convert_media(input_path, output_path)
    else:
        print(f"Неизвестный тип файла: {file_type}")
        return False
