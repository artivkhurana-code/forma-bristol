#!/usr/bin/env python3
"""Tiny local preview server for the Forma Bristol site.

Usage:  python3 serve.py [port]      (default port 8000)
Then open the printed URL in your browser. Press Ctrl+C to stop.

This is only a convenience for previewing locally — the site is a plain
static folder and can be hosted on anything (Vercel, Netlify, S3, GitHub
Pages, etc.) with no build step.
"""
import http.server
import os
import socketserver
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


class Server(socketserver.ThreadingMixIn, socketserver.TCPServer):
    daemon_threads = True
    allow_reuse_address = True


if __name__ == "__main__":
    os.chdir(ROOT)
    with Server(("127.0.0.1", PORT), Handler) as httpd:
        print(f"Forma Bristol → http://localhost:{PORT}  (Ctrl+C to stop)")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
