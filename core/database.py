import sqlite3
from datetime import datetime
from core.config import DB_PATH

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # Чтобы читать строки как словари
    return conn

def init_db():
    """Создает таблицу истории, если её еще нет"""
    with get_db_connection() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS conversion_history (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                filename TEXT NOT NULL,
                target_format TEXT NOT NULL,
                status TEXT NOT NULL,
                timestamp TEXT NOT NULL
            )
        ''')
        conn.commit()

def add_history_record(filename, target_format, status="Success"):
    """Добавляет запись в историю"""
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with get_db_connection() as conn:
        conn.execute('''
            INSERT INTO conversion_history (filename, target_format, status, timestamp)
            VALUES (?, ?, ?, ?)
        ''', (filename, target_format, status, now))
        conn.commit()

def get_all_history():
    """Возвращает всю историю для отображения в UI"""
    with get_db_connection() as conn:
        cursor = conn.execute('SELECT * FROM conversion_history ORDER BY id DESC')
        rows = cursor.fetchall()
        return [dict(row) for row in rows]
