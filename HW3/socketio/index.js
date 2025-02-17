const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  // Emit a message when a new user connects
  socket.emit('chat message', 'Welcome to the chat Benihanna!');
  
  // Listen for chat messages and emit them to all clients
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg); // Broadcast the message to all clients
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});



server.listen(3000, () => {
  console.log('listening on *:3000');
});

// This will emit the event to all connec
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); 



