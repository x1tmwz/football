const randomRange = require('../utils/randomRange');

class Map {
    constructor(){
        this.map=[]
        this.numberOfMarks = 10000;
        this.startLat = 37;
        this.endLat = 40;
        this.startLng = -110;
        this.endLng =-102.1;
    }
    validLocation({lat,lng}){
        return (this.startLat <= lat && lat<=this.endLat) && (this.startLng <= lng && lng <= this.endLng); 
    }
    genrateMatkers(){
        return new Promise((resolve,reject)=>{
            const arr = [];
            for (let i = 0; i < this.numberOfMarks; i++) {
                let lat = randomRange(37,40);
                let lng = randomRange(-102.1,-110);
                let position = {lat, lng};
                let id = "car"+i;
                arr.push({ id, position,index:i,display:`lat:${ lat.toPrecision(5)} lng:${lng.toPrecision(5)}`});
            }
            this.map = arr;
            resolve(arr);
        })
    }
    getMarkerById(marker){
        return new Promise((resolve,reject)=>{
            const foundMarker = this.map.find((mark)=>mark.id === marker);
            resolve(foundMarker);
        })
      
    }
    changeMarkerLocation(marker,position){
        this.map[marker.index].position = position;
        return this.map;
    }
    getMarkers(){
        return this.map;
    }
}

module.exports = new Map();