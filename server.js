var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    io = require('socket.io').listen(server);

io.set('log level', 1); //less logging info

app.configure(function () {
    app.use(express.static(__dirname + '/app')); // set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); // log every request to the console
    app.use(express.bodyParser()); // pull information from html in POST
    app.use(express.methodOverride()); // simulate DELETE and PUT
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/index.html');
});
app.get('/remote', function (req, res) {
    res.sendfile(__dirname + '/public/remote.html');
});

app.get('/game', function (req, res) {
    res.sendfile(__dirname + '/public/apps/javascript-tetris/index.html');
});

var ss;
io.sockets.on('connection', function (socket) {
     
    //bigscreen ready
    socket.on("bigscreen", function (data) {
        socket.type = "bigscreen";
        ss = socket;
        console.log("Screen ready...");
    });
    //remote ready
    socket.on("remote", function (data) {
        socket.type = "remote";

        console.log("Remote ready...");
    });

    //Socket Listens

    socket.on('start', function (data) {
        if (socket.type == "bigscreen") {
            console.log("SOcket Started YHAAAA " + data.start)
        } else {
            console.log("Remote Ready...")
        }

    });
    socket.on('sendingName', function (data) {
        var name = data.name;
        console.log("Name recived " + name)
        ss.emit('sendingN', {
            name: name
        });
        socket.emit('question', {
            name: name
        });
        
    }); 
    
    socket.on('sendingAnswer', function (data) {
        var answer = data.answerId;
        console.log("Answer recived " + answer)
       
    });
    
    //thegame
    socket.on('app', function (data) {
        
        //ss.emit('right');
		console.log(data.key);
        io.sockets.emit('app',{key:data.key});
         
        
    });
	/*
	socket.on('left', function (data) {
        
        //ss.emit('right');
		console.log("left");
        io.sockets.emit('left');
         
        
    });
	
	socket.on('up', function (data) {
        
        //ss.emit('right');
		console.log("up");
        io.sockets.emit('up');
         
        
    });
	
	socket.on('down', function (data) {
        
        //ss.emit('right');
		console.log("down");
        io.sockets.emit('down');
         
        
    });
*/



});

    


server.listen(5555);
console.log("App listen on port 5555");

//get ip
var os = require('os');
var ifaces = os.networkInterfaces();
for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function (details) {
        if (details.family == 'IPv4') {
            console.log(dev + (alias ? ':' + alias : ''), details.address);
            ++alias;
        }
    });
}
//get os type eg: darwin for macos
console.log(os.type());