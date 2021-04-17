const express = require('express');
const socket = require('../socket');
const map = require('../services/Map');
const ApiError = require('../error/ApiError');


const router = new express.Router();

router.get('/markers', async (req, res,next) => {
    try {
        const data = await map.genrateMatkers()
        res.status(200).send({ data,status:200});
    } catch (e) {
        next(e)
    }
})
router.post('/markers', async (req, res,next) => {
    try {
        if(!req.body){
            throw new ApiError("400","you didnt send any data");
        }
        if(!(map.validLocation(req.body.position))){
            throw new ApiError("400","this location is not in colordo please enter lat between 37 to 40 and lng between -110 to -102.1 ")
        }
        const foundMarker = await map.getMarkerById(req.body.id);
        if(!foundMarker){
            throw new ApiError("400","the id you provid is not found");
        }
        map.changeMarkerLocation(foundMarker,req.body.position);
        socket.io.emit('getLocation', {markers:map.getMarkers()});
        res.status(200).send({ message: "sucsses"});
    } catch (e) {
        next(e)
    }
})




module.exports = router;
