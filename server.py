# import SimpleHTTPServer
# import SocketServer
#
# PORT = 8000
#
# Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
#
# httpd = SocketServer.TCPServer(("", PORT), Handler)
#
# def move():
#     """ sample function to be called via a URL"""
#     return 'hi'
#
# print "serving at port", PORT
# httpd.serve_forever()

def application(env, start_response):
    start_response('200 OK', [('Content-Type','text/html')])
    return [b"<html><p>Hello world</p></html>"]
