from watchdog_gevent.observers import GeventObserver
from watchdog.events import FileSystemEventHandler
from flask import Flask
from flask_socketio import SocketIO
import os
import time

path = "/flag/flag.txt"

def get_team_name():
    with open(path, "r") as f:
        return f.readline().strip()


current_team_name = get_team_name()

timers = {
    "honk": 0,
    "if": 0,
    "youre": 0,
    "gaming": 0
}

def update_timer():
    global socket
    while True:
        time.sleep(1)

        if current_team_name in timers:
            timers[current_team_name] += 1

        socket.emit('data_update', {
            "is_valid_team": current_team_name in timers,
            "team_name": current_team_name,
            "timers": timers
            })

class ModifiedFlagHandler(FileSystemEventHandler):
    def on_modified(self, event):
        global current_team_name
        
        if not event.is_directory:
            current_team_name = get_team_name()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
socket = SocketIO(app, cors_allowed_origins='*')

socket.start_background_task(target=update_timer)

observer = GeventObserver()
observer.schedule(ModifiedFlagHandler(), path)
observer.start()

@socket.on('connect')
def connection_handler():
    socket.emit('data_update', {
        "is_valid_team": current_team_name in timers,
        "team_name": current_team_name,
        "timers": timers
        })
