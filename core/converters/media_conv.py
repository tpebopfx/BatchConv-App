import os
import subprocess

def convert_media(input_path, output_folder, target_format):
    """Конвертирует видео и аудио через FFmpeg"""
    try:
        filename = os.path.basename(input_path)
        name, _ = os.path.splitext(filename)
        
        format_dir = os.path.join(output_folder, target_format.lower())
        os.makedirs(format_dir, exist_ok=True)
        
        output_path = os.path.join(format_dir, f"{name}.{target_format.lower()}")
        
        # Команда для FFmpeg (работает асинхронно в Termux)
        command = ['ffmpeg', '-y', '-i', input_path, output_path]
        
        # Запускаем процесс скрыто
        process = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        
        if process.returncode == 0:
            return {"success": True, "path": output_path}
        else:
            return {"success": False, "error": process.stderr}
    except Exception as e:
        return {"success": False, "error": str(e)}
