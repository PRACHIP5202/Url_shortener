const mongoose = require('mongoose');

async function connectingmongodb(url){
    return mongoose.connect(url);
}

module.exports= connectingmongodb;