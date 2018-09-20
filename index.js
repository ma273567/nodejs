/*
    This is a Nodejs project that uses express and websocket APIs
*/

// test server start
console.log('running websocket');
// end test

var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(3000, function(){
    console.log('listening for requests on port 3000..');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat message', function(data){
        console.log(data);
        io.sockets.emit('chat message', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});