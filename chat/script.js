var socket = io.connect()
var name = prompt('enter name')
var messageBox = document.getElementById('message')
var sendButton = document.getElementById('button')
var output = document.getElementById('chatlog')

sendButton.addEventListener('click',function(){
  var messageToSend = name+' : '+(messageBox.value)
  socket.emit('message',messageToSend)
})


socket.on('message',function(data){
  var msg = data + '<br>' + output.innerHTML
  output.innerHTML = msg
})