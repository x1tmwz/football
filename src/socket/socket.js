import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const getLocation = (callback)=>{
    socket.on("getLocation",(data)=>{
        callback(data);
    })
}

export {getLocation}