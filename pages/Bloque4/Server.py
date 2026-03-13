import asyncio
import json
import random
import threading
from http.server import BaseHTTPRequestHandler, HTTPServer
from datetime import datetime

import websockets


# =========================================================
# HTTP SERVER — PORT 3001
# =========================================================

class TestHandler(BaseHTTPRequestHandler):

    # ----------- CORS HEADERS -----------

    def _set_cors_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    # ----------- OPTIONS (PRE-FLIGHT) -----------

    def do_OPTIONS(self):
        self.send_response(200)
        self._set_cors_headers()
        self.end_headers()

    # ----------- COMMON HANDLER -----------

    def _handle_request(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length) if content_length > 0 else b''

        print("\n==============================")
        print("HTTP REQUEST RECEIVED")
        print("Method:", self.command)
        print("Path:", self.path)
        print("Headers:", dict(self.headers))
        print("Body:", body.decode(errors="ignore"))
        print("==============================\n")

        self.send_response(200)
        self._set_cors_headers()
        self.send_header("Content-Type", "text/plain")
        self.end_headers()

        self.wfile.write(b"OK")

    def do_GET(self):
        self._handle_request()

    def do_POST(self):
        self._handle_request()

    def log_message(self, format, *args):
        return


def run_http_server():
    server = HTTPServer(("0.0.0.0", 3001), TestHandler)
    print("HTTP server listening on port 3001")
    server.serve_forever()


# =========================================================
# WEBSOCKET SERVER — PORT 3002
# =========================================================

async def ws_handler(websocket):
    print("WebSocket client connected")

    data_buffer = []

    try:
        while True:
            value = random.uniform(0, 100)

            data_buffer.append({
                "time": datetime.now().strftime("%H:%M:%S"),
                "value": value
            })

            data_buffer = data_buffer[-20:]

            await websocket.send(json.dumps(data_buffer))
            await asyncio.sleep(1)

    except websockets.exceptions.ConnectionClosedOK:
        print("Client disconnected normally")

    except websockets.exceptions.ConnectionClosedError:
        print("Client disconnected with error")


async def run_ws_server():
    print("WebSocket server listening on port 3002")

    async with websockets.serve(
        ws_handler,
        "0.0.0.0",
        3002
    ):
        await asyncio.Future()


# =========================================================
# MAIN
# =========================================================

if __name__ == "__main__":

    print("\n=== TEST SERVER STARTING ===")

    http_thread = threading.Thread(
        target=run_http_server,
        daemon=True
    )
    http_thread.start()

    asyncio.run(run_ws_server())