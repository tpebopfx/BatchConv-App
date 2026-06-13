import os
from pathlib import Path

def get_output_path(base_dir: str, filename: str, ext: str) -> str:
    """Создает папку под формат и возвращает полный путь для сохранения"""
    # Убираем точку из расширения для красивого названия папки (например, 'mp4' вместо '.mp4')
    folder_name = ext.replace('.', '')
    format_dir = Path(base_dir) / folder_name
    
    # Создаем папку, если её еще нет (exist_ok=True предотвращает ошибку, если папка уже есть)
    format_dir.mkdir(parents=True, exist_ok=True)
    
    # Формируем итоговое имя файла
    file_stem = Path(filename).stem
    new_filename = f"{file_stem}{ext}"
    
    return str(format_dir / new_filename)
