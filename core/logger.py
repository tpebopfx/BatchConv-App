import os
import logging
from core.config import LOGS_DIR

log_file = os.path.join(LOGS_DIR, "app.log")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[
        logging.FileHandler(log_file, encoding='utf-8'),
        logging.StreamHandler()  # Дублировать в консоль Termux
    ]
)

logger = logging.getLogger("ConvertApp")
