const ApiError = require('../error/ApiError');

module.exports = (err,req,res,next) =>{
    if(err instanceof ApiError){
        res.status(err.status).send({ error: err.message,body:err.response });
        return;
    }
    console.log(err);
    res.status(500).send({error:"somthing went wrong"})

}
