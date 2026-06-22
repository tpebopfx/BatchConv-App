import os
import subprocess
from PIL import Image
from core.config import FFMPEG_PATH, UPLOAD_FOLDER, OUTPUT_FOLDER

def convert_image(input_path, output_path, target_format):
    """Обработка изображений с помощью Pillow"""
    try:
        with Image.open(input_path) as img:
            # Если конвертируем в jpeg/jpg, убираем альфа-канал (прозрачность), иначе Pillow упадет
            if target_format.lower() in ['jpg', 'jpeg'] and img.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1])
                img = background
            
            img.save(output_path, format=target_format.upper())
        return True, None
    except Exception as e:
        return False, f"Ошибка Pillow: {str(e)}"

def convert_media_via_ffmpeg(input_path, output_path):
    """Обработка видео и аудио с помощью FFmpeg"""
    try:
        # -y автоматически перезаписывает файл, если он существует
        cmd = [FFMPEG_PATH, "-y", "-i", input_path, output_path]
        
        # Запускаем скрытый процесс
        process = subprocess.run(
            cmd, 
            stdout=subprocess.PIPE, 
            stderr=subprocess.PIPE, 
            text=True
        )
        
        if process.returncode == 0:
            return True, None
        else:
            return False, f"Ошибка FFmpeg: {process.stderr}"
    except Exception as e:
        return False, f"Не удалось запустить конвертер: {str(e)}"

def process_conversion(filename, target_format):
    """Главная функция-распределитель"""
    input_path = os.path.join(UPLOAD_FOLDER, filename)
    
    # Генерируем новое имя файла (например, video.mp4 -> video.webm)
    base_name, _ = os.path.splitext(filename)
    output_filename = f"{base_name}.{target_format}"
    output_path = os.path.join(OUTPUT_FOLDER, output_filename)
    
    if not os.path.exists(input_path):
        return {"status": "error", "message": "Исходный файл не найден"}

    # Списки форматов для деления логики
    image_formats = ['png', 'jpg', 'jpeg', 'webp', 'bmp', 'tiff', 'ico']
    
    # Запускаем нужный движок
    if target_format.lower() in image_formats:
        success, error_msg = convert_image(input_path, output_path, target_format)
    else:
        success, error_msg = convert_media_via_ffmpeg(input_path, output_path)
        
    if success:
        return {
            "status": "success", 
            "output_file": output_filename,
            "message": "Конвертация успешно завершена"
        }
    else:
        return {"status": "error", "message": error_msg}

