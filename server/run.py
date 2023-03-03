from gevent import monkey
monkey.patch_all()

from watchdog_gevent.observers import GeventObserver
from watchdog.events import FileSystemEventHandler
from flask import Flask, render_template
from flask_socketio import SocketIO
import os
import datetime

def get_team_name():
    with open(path, "r") as f:
        return f.readline().strip()

path = "../flag/flag.txt"
socket = None

prev_team_name = get_team_name()
prev_time = datetime.datetime.now()

timers = {
    "aa": 0.0,
    "bb": 0.0,
    "cc": 0.0,
    "dd": 0.0
}

class ModifiedFlagHandler(FileSystemEventHandler):
    def on_modified(self, event):
        assert socket
        global prev_team_name, prev_time
        
        if not event.is_directory:

            if prev_team_name in timers:
                timers[prev_team_name] += (datetime.datetime.now() - prev_time).total_seconds() * 1000

            new_team_name = get_team_name()

            socket.emit('data_update', {
                "is_valid_team": new_team_name in timers,
                "team_name": new_team_name,
                "timers": timers
                })

            prev_team_name = new_team_name
            prev_time = datetime.datetime.now()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
socket = SocketIO(app, cors_allowed_origins='*')

observer = GeventObserver()
observer.schedule(ModifiedFlagHandler(), path)
observer.start()

@socket.on('connect')
def connection_handler():
    team_name = get_team_name()
    socket.emit('data_update', {
        "is_valid_team": team_name in timers,
        "team_name": team_name,
        "timers": timers
        })
