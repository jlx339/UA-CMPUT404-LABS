# Taken from https://pointlessprogramming.wordpress.com/2011/02/13/python-cgi-tutorial-1/ 2016-01-20

# Copyright Nick Zarczynski,  who hopefully won't sue me when I post this to github

#!/usr/bin/env python
 
import BaseHTTPServer
import CGIHTTPServer
import cgitb; cgitb.enable()  ## This line enables CGI error reporting
 
server = BaseHTTPServer.HTTPServer
handler = CGIHTTPServer.CGIHTTPRequestHandler
server_address = ("", 8000)
handler.cgi_directories = ["/"]
 
httpd = server(server_address, handler)
httpd.serve_forever()
