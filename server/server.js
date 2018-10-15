const http = require('http');
const express = require('express');
const socketio = require('socket.io');
//const cors = require('cors');

const port = process.env.port || 3000;

var app = express();
var server = http.createServer(app)
var io = socketio(server)

//app.use(cors());

io.on('connection', (socket) => {
  socket.on('ionic-login', (name) => {
    console.log(`User ${name} has logged in.`);
  });

  socket.on('alert-sent', (alert) => {
    // do something with alert object
  });

  socket.emit('broadcast-alert', { alert: 'test alert' });

  socket.on('disconnect', () => {
    console.log('User has disconnected.');
  });
});

server.listen(port, () => {
  console.log('Server is up on port', port);
});
