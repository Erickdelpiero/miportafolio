import http.server
import socketserver

# Configurar el puerto donde se ejecutará el servidor
PORT = 8000

# Definir el manejador de solicitudes HTTP
Handler = http.server.SimpleHTTPRequestHandler

# Crear el servidor usando el manejador y el puerto especificado
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor corriendo en http://localhost:{PORT}")
    
    # Mantener el servidor en ejecución hasta que se detenga manualmente
    httpd.serve_forever()
