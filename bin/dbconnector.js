/**
 * Created by taox on 15-5-20.
 */
var mysql = require('mysql');
var chatserver = require('./chatserver');
var chatroomServer = require('./chatroom/chatroomServer');
exports.connect =  function(server){
  //var connection = mysql.createConnection({
  //  host     : '192.168.1.45',
  //  port     :  3306,
  //  user     : 'taox',
  //  password : '123456',
  //  database : 'chatdb'
  //});
  //
  //connection.connect();
  //connection.query('SELECT * from room',function(err,rows,fields){
  //  if(err){
  //    console.log(err);
  //    throw  err;
  //  }
    //使用自定义房间方式。
  var roomArr = [{"name":"杨过","id":"1","onlineUser":"100"},
    {"name":"小龙女","id":"2","onlineUser":"100"},
    {"name":"独孤求败","id":"3","onlineUser":"100"},
    {"name":"东方不败","id":"4","onlineUser":"100"},
    {"name":"令狐聪","id":"5","onlineUser":"100"},
    {"name":"韦小宝","id":"6","onlineUser":"100"},
    {"name":"雄霸天下","id":"7","onlineUser":"100"},
    {"name":"风云","id":"8","onlineUser":"100"}];
    //chatserver.setChatRoom(roomArr,server);
    //使用房间和namespace对应方式实现聊天。
    chatroomServer.initChatRoom(roomArr,server);
  //});
  //
  //connection.end();
};
