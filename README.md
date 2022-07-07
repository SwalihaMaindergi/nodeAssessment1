What is Node.js?
   Node.js is an open source server environment.
   It runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
   It uses JavaScript on the server.
   It uses asynchronous programming.
   It eliminates the waiting, and simply continues with the next request.
   It runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

What Can Node.js Do?
   Node.js can generate dynamic page content.
   It can create, open, read, write, delete, and close files on the server.
   It can collect form data.
   It can add, delete, modify data in your database

Node modules
=> http, https, path, os these are some of the core node modules.

   http: It helps us with launching a server, also with other tasks like sending requests because a node app could also send a request to another server.
   https: It helps us with launching a SSL server where all code encrypted.
   path: This module helps us with constructing paths to file on a file system that work on any operating system because windows and mac and linux use different path formats.
   OS: This module helps us with operating system, relevant information and so on.

Process for creating package and adding start script
   create a package.json file npm init (to configure file) or npm init --y (y for yes to all options).

   In scripts create start: "node index.js" in package,json file.
