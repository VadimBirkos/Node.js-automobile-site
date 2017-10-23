var http = require('http');
var greeting = require("./greeting");
http.createServer(function(request,response){
   
}).listen(3000, '127.0.0.1',function(){
    global.name = "Eugene";
    console.log('Server was starting on 3000 port');
    console.log(date);
    console.log(greeting.getMessage());

}); 

