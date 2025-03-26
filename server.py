import http.server
import socketserver
import os

# Configurar el puerto donde se ejecutará el servidor
PORT = 8000

# Definir el directorio donde se encuentran los archivos a servir
DIRECTORY = "."

# Clase personalizada para manejar las solicitudes HTTP
class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

# Cambiar el directorio de trabajo actual al directorio donde está server.py
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Crear el servidor usando el manejador y el puerto especificado
with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Servidor corriendo en http://localhost:{PORT}")
    # Mantener el servidor en ejecución hasta que se detenga manualmente
    httpd.serve_forever()
