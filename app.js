var http = require('http');
var User = require('./user');
var greeting = require('./greeting');
var os = require('os');
http.createServer(function(request,response){
    var userName = os.userInfo().username;
    var responseString = '';
    responseString += 'Hello NodeJS!</br> ' + userName + "\n";
    responseString += 'Current date: '+greeting.date + "\n";
    responseString += greeting.getMessage(userName) + "\n";
    var newUser = new User('John', 32);
    responseString += newUser.sayHi();
    response.end(responseString);

    newUser.displayInfo();
}).listen(3000, '127.0.0.1',function(){
    console.log('Server was starting on 3000 port');
}); 

