var express = require("express")
var socket = require("socket.io")
var app = express()

app.use(express.static('chat'))
var server = app.listen(3000,function(){
  console.log("server online")
})

 var io = socket(server)
 io.on('connection',connected)

 function connected(socket){
   console.log(socket.id + " has connected")
   socket.on('message',function(data){
     io.emit('message',data);
     console.log(data)
   })
 }