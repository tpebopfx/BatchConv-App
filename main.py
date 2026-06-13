import os
from flask import Flask, request, jsonify, Response
from core.scanner import process_conversion
from core.config import UPLOAD_FOLDER, OUTPUT_FOLDER
from core.database import init_db, add_history_record, get_all_history
from core.logger import logger

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
UI_DIR = os.path.join(BASE_DIR, 'ui')

app = Flask(__name__)

# Инициализируем базу данных при запуске сервера
init_db()
logger.info("База данных успешно инициализирована.")

@app.route('/')
def index():
    try:
        with open(os.path.join(UI_DIR, 'index.html'), 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        logger.error(f"Ошибка загрузки index.html: {e}")
        return "Ошибка сервера", 504

@app.route('/style.css')
def style():
    with open(os.path.join(UI_DIR, 'style.css'), 'r', encoding='utf-8') as f:
        return Response(f.read(), mimetype='text/css')

@app.route('/app.js')
def script():
    with open(os.path.join(UI_DIR, 'app.js'), 'r', encoding='utf-8') as f:
        return Response(f.read(), mimetype='application/javascript')

# --- API ДЛЯ РАБОТЫ С ИСТОРИЕЙ ---

@app.route('/api/history', methods=['GET'])
def api_get_history():
    try:
        history = get_all_history()
        return jsonify({"success": True, "history": history})
    except Exception as e:
        logger.error(f"Ошибка получения истории из БД: {e}")
        return jsonify({"success": False, "error": str(e)}), 500

# --- API ДЛЯ КОНВЕРТАЦИИ ---

@app.route('/api/convert', methods=['POST'])
def api_convert():
    if 'file' not in request.files:
        return jsonify({"success": False, "error": "Файл не получен"}), 400
        
    file = request.files['file']
    target_format = request.form.get('targetFormat', 'png')
    
    if file.filename == '':
        return jsonify({"success": False, "error": "Файл пуст"}), 400
        
    input_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(input_path)
    logger.info(f"Получен файл для конвертации: {file.filename} -> {target_format}")
    
    # Конвертируем
    result = process_conversion(input_path, OUTPUT_FOLDER, target_format)
    
    if result.get("success"):
        # Записываем успешное действие в БД
        add_history_record(file.filename, target_format, "Success")
        logger.info(f"Файл {file.filename} успешно конвертирован.")
    else:
        add_history_record(file.filename, target_format, "Failed")
        logger.error(f"Ошибка конвертации файла {file.filename}: {result.get('error')}")
    
    if os.path.exists(input_path):
        os.remove(input_path)
        
    return jsonify(result)

if __name__ == '__main__':
    logger.info("🚀 Сервер (Termux Edition) запускается на порту 5000...")
    app.run(host='0.0.0.0', port=5000, debug=True)

