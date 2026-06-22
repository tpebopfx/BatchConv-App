import os
import subprocess
import threading
import time
import signal
from config import UPLOAD_FOLDER, DOWNLOAD_FOLDER, VIDEO_FORMATS, AUDIO_FORMATS, IMAGE_FORMATS

class TaskManager:
    def __init__(self):
        self.tasks = {}

    def get_media_duration(self, filepath):
        try:
            cmd = [
                'ffprobe', '-v', 'error', '-show_entries', 'format=duration',
                '-of', 'default=noprint_wrappers=1:nokey=1', filepath
            ]
            result = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            if result.returncode == 0:
                return float(result.stdout.strip())
        except:
            pass
        return None

    def parse_ffmpeg_time(self, line):
        if 'time=' in line:
            try:
                time_str = line.split('time=')[1].split()[0]
                if ':' in time_str:
                    parts = time_str.split(':')
                    hours = float(parts[0])
                    minutes = float(parts[1])
                    seconds = float(parts[2])
                    return hours * 3600 + minutes * 60 + seconds
                else:
                    return float(time_str)
            except:
                pass
        return None

    def _run_ffmpeg(self, task_id, cmd, input_path, total_duration):
        task = self.tasks[task_id]
        
        process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
        task['process'] = process
        task['status'] = 'processing'

        while True:
            line = process.stdout.readline()
            if not line and process.poll() is not None:
                break
                
            if not line:
                continue

            if task['status'] == 'paused':
                continue

            current_time_pos = self.parse_ffmpeg_time(line)
            if current_time_pos and total_duration:
                progress = (current_time_pos / total_duration) * 100
                task['progress'] = min(round(progress, 1), 99.9)
                
                now = time.time()
                elapsed = now - task['start_time'] - task['total_paused_time']
                task['elapsed_time'] = round(elapsed)
                
                if progress > 1:
                    total_estimated_time = (elapsed / progress) * 100
                    remaining = total_estimated_time - elapsed
                    task['eta'] = max(0, round(remaining))

        return_code = process.poll()
        
        if os.path.exists(input_path):
            try:
                os.remove(input_path)
                print(f"[КЭШ ОЧИЩЕН] Исходник удален: {input_path}")
            except:
                pass

        if task['status'] == 'cancelled':
            task['progress'] = 0
            if os.path.exists(task['output_path']):
                try: os.remove(task['output_path'])
                except: pass
        elif return_code == 0:
            task['status'] = 'completed'
            task['progress'] = 100
            task['eta'] = 0
        else:
            if task['status'] != 'cancelled':
                task['status'] = 'error'

    def start_task(self, file_filename, target_format):
        task_id = str(int(time.time() * 1000))
        input_path = os.path.join(UPLOAD_FOLDER, file_filename)
        filename_wo_ext = os.path.splitext(file_filename)[0]
        output_filename = f"{filename_wo_ext}.{target_format}"
        output_path = os.path.join(DOWNLOAD_FOLDER, output_filename)

        source_ext = file_filename.split('.')[-1].lower()
        total_duration = self.get_media_duration(input_path)

        cmd = ['ffmpeg', '-y', '-i', input_path]
        if target_format in IMAGE_FORMATS:
            cmd.extend(['-vframes', '1'])
        elif target_format in VIDEO_FORMATS:
            cmd.extend(['-c:v', 'libx264', '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-preset', 'ultrafast'])

        cmd.append(output_path)

        self.tasks[task_id] = {
            'id': task_id,
            'filename': output_filename,
            'output_path': output_path,
            'status': 'queued',
            'progress': 0,
            'start_time': time.time(),
            'elapsed_time': 0,
            'eta': 0,
            'pause_start_time': 0,
            'total_paused_time': 0,
            'process': None
        }

        thread = threading.Thread(target=self._run_ffmpeg, args=(task_id, cmd, input_path, total_duration))
        thread.start()

        return task_id

    def pause_task(self, task_id):
        if task_id in self.tasks and self.tasks[task_id]['status'] == 'processing':
            task = self.tasks[task_id]
            task['process'].send_signal(signal.SIGSTOP)
            task['status'] = 'paused'
            task['pause_start_time'] = time.time()
            return True
        return False

    def resume_task(self, task_id):
        if task_id in self.tasks and self.tasks[task_id]['status'] == 'paused':
            task = self.tasks[task_id]
            task['process'].send_signal(signal.SIGCONT)
            task['status'] = 'processing'
            task['total_paused_time'] += (time.time() - task['pause_start_time'])
            return True
        return False

    def cancel_task(self, task_id):
        if task_id in self.tasks:
            task = self.tasks[task_id]
            task['status'] = 'cancelled'
            if task['process']:
                task['process'].terminate()
            return True
        return False

    def get_task_status(self, task_id):
        if task_id in self.tasks:
            t = self.tasks[task_id]
            return {
                "id": t["id"], "status": t["status"], "progress": t["progress"],
                "filename": t["filename"], "elapsed": t["elapsed_time"], "eta": t["eta"]
            }
        return None

