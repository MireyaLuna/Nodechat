var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);



app.get('/', function(req, res) {
  res.sendFile( __dirname + '/index.html');
});


io.on('connection', function(socket) {
  
  console.log('New user connected');
  socket.on('nuevo mensaje', function(msj) {
    io.emit('nuevo mensaje', msj);
  });

  socket.on('disconnect', function() {
    console.log('Usuario desconectado');
  });
  
});


var port = process.env.PORT || 9999
http.listen(port, function() {
  console.log('listening on *:'+ port);
});
