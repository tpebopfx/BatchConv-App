import os
import shutil

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

UPLOAD_FOLDER = os.path.join(BASE_DIR, "TempUploads")
OUTPUT_FOLDER = os.path.join(BASE_DIR, "Converted")
DB_PATH = os.path.join(BASE_DIR, "history.db")
LOGS_DIR = os.path.join(BASE_DIR, "logs")

# Папка для наших автономных бинарников (для APK)
BIN_DIR = os.path.join(BASE_DIR, "bin")

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)
os.makedirs(LOGS_DIR, exist_ok=True)
os.makedirs(BIN_DIR, exist_ok=True)

# Умный поиск FFmpeg
# Сначала ищем в нашей папке bin (для APK)
_local_ffmpeg = os.path.join(BIN_DIR, "ffmpeg")

if os.path.exists(_local_ffmpeg):
    FFMPEG_PATH = _local_ffmpeg
else:
    # Если локального нет, ищем в системе (для тестов в Termux)
    FFMPEG_PATH = shutil.which("ffmpeg") or "ffmpeg"

