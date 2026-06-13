import os
from PIL import Image

def convert_image(input_path, output_folder, target_format):
    """Конвертирует изображения (PNG, JPG, WEBP, BMP)"""
    try:
        filename = os.path.basename(input_path)
        name, _ = os.path.splitext(filename)
        
        # Создаем подпапку для формата (например, Converted/png/)
        format_dir = os.path.join(output_folder, target_format.lower())
        os.makedirs(format_dir, exist_ok=True)
        
        output_path = os.path.join(format_dir, f"{name}.{target_format.lower()}")
        
        # Логика конвертации через Pillow
        with Image.open(input_path) as img:
            # Если конвертируем в JPEG, убираем альфа-канал (прозрачность)
            if target_format.lower() in ['jpg', 'jpeg'] and img.mode in ('RGBA', 'LA'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3])
                img = background
                
            img.save(output_path, target_format.upper())
            
        return {"success": True, "path": output_path}
    except Exception as e:
        return {"success": False, "error": str(e)}
