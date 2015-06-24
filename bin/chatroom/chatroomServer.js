/**
 * Created by taox on 15-5-25.
 */

var socketIO = require('socket.io'),
  roomNamespaceArr = [];
exports.initChatRoom = function (roomArr, server) {
  var io = socketIO(server);
  for (var i = 0; i < roomArr.length; i++) {
    var roomNamespace = io.of("/"+roomArr[i].id);
    roomConnected(roomNamespace);
    roomNamespaceArr.push(roomNamespace);
  }
};
function roomConnected(roomNamespace){
  console.log("init namespace"+roomNamespace);
  roomNamespace.on("connection",function(socket){
    //console.log(this.sockets.length);
    //console.log(socket.id);
    //console.log("==============================>>");
    socket.on("room chat", function (msg) {
      roomNamespace.emit('room chat',msg);
    });
    socket.emit('user number',{userNum:roomNamespace.onlineUser});
  });
  roomNamespace.onlineUser = roomNamespace.sockets.length;
  setInterval(function(){
    roomNamespace.onlineUser = roomNamespace.sockets.length;
  },10000);
}

