/*
    This is a Nodejs project that uses express and websocket APIs
*/

// test server start
console.log('running websocket');
// end test

const bodyParser = require('body-parser');
const socket = require('socket.io');
const express = require('express');
const app = express();

// body-parser middleware for Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// http server object listening on port 3000
var server = app.listen(3000, function() {
    console.log('listening on port 3000');
})

/*
Express requests handler methods
*/

// use '/view' as static files path (for html, css etc..)
// serves index.html as default
app.use(express.static('public'));

// GET request
//app.get('/', function(req, res){
//    // serve index.html
//    res.send
//})

// socket setup (pass http.server)
var io = socket(server);

io.on('connection', function(socket) {
    console.log('user connected');
})