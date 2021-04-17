var socket = require('socket.io');

var SocketSingleton = (function() {
  this.io = null;
  this.configure = function(server) {
    this.io = socket(server,{
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });
  }
  return this;
})();

module.exports = SocketSingleton;