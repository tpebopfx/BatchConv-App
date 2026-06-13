import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

UPLOAD_FOLDER = os.path.join(BASE_DIR, "TempUploads")
OUTPUT_FOLDER = os.path.join(BASE_DIR, "Converted")
# Путь к файлу базы данных
DB_PATH = os.path.join(BASE_DIR, "history.db")
# Путь к папке с логами
LOGS_DIR = os.path.join(BASE_DIR, "logs")

# Авто-создание папок
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)
os.makedirs(LOGS_DIR, exist_ok=True)

