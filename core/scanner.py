import os
from core.converters.image_conv import convert_image
from core.converters.media_conv import convert_media

# Группируем форматы по модулям
IMAGE_FORMATS = ['png', 'jpg', 'jpeg', 'webp', 'bmp', 'gif']
MEDIA_FORMATS = ['mp4', 'mkv', 'webm', 'avi', 'mov', 'flv', 'mp3', 'wav', 'flac', 'ogg', 'aac', 'm4a']
DOC_FORMATS = ['pdf', 'docx', 'txt', 'xlsx']
ARCHIVE_FORMATS = ['zip', 'tar', 'gz', 'rar']
BOOK_FORMATS = ['epub', 'fb2', 'mobi']

def process_conversion(input_path, output_folder, target_format):
    """Определяет формат и направляет файл в нужный изолированный модуль"""
    if not os.path.exists(input_path):
        return {"success": False, "error": "Исходный файл не найден на устройстве"}
        
    _, ext = os.path.splitext(input_path)
    ext = ext.replace('.', '').lower()
    target_format = target_format.lower()
    
    # 1. Направляем в модуль картинок
    if ext in IMAGE_FORMATS:
        return convert_image(input_path, output_folder, target_format)
        
    # 2. Направляем в модуль видео/аудио
    elif ext in MEDIA_FORMATS:
        return convert_media(input_path, output_folder, target_format)
        
    # 3. Заглушки для остальных типов
    elif ext in DOC_FORMATS:
        return {"success": False, "error": "Конвертация документов временно недоступна"}
    elif ext in ARCHIVE_FORMATS:
        return {"success": False, "error": "Конвертация архивов временно недоступна"}
    elif ext in BOOK_FORMATS:
        return {"success": False, "error": "Конвертация книг временно недоступна"}
        
    else:
        return {"success": False, "error": f"Формат {ext} не поддерживается приложением"}

