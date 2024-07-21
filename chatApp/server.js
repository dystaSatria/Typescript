var express = require('express');
const { listen } = require('socket.io');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
users = [];
connections = [];
server.listen(3000);

app.get('/', function (req, resp) {
    resp.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);
    socket.on('disconnect', function (data) {
        // if(!socket.username) return;
        users.splice(users.indexOf(socket.username), 1);
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });
    socket.on('send message', function (data) {
        io.emit('new message', {msg: data, user: socket.username});
    });
});

console.log('server is running on port 3000');
