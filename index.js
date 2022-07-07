const http = require('http'); // import any other module

http.createServer(function (request,response) { 
    //creating server : server take callback function
    //request-access all data frontend=> backend
    //response- whatever we r trying to send  backend => frontend

    const jsonData = {
        name : 'Harry', 
        age : 25, 
        Email : 'harry@gmail.com',
    }
    response.write("<h1> Hello..This is HTML Element Response</h1>")
    response.write('Hello String response \n');
    response.write(JSON.stringify(jsonData));
    response.end();

})

.listen(7000); // Port number : Every server Different Port Number.



// Everytime we update the response we need to restart the server again through 'node index.js(FileName)'