module.exports = (min, max)=> { // min and max included 
    return (Math.random() * (max - min + 1) + min);
}