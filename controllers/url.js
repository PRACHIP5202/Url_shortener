//search short-id in npmjs.com

const Url = require('../models/url'); 
var ids= require('short-id');

async function handlecreatUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({err: 'Url is required'});

    shortId = ids.generate();
    await urlencoded.create({
        shortId: shortId,
        redirectUrl : body.url,
        visitedHistory: [],
    })

    return res,json({id: shortId});
}


module.exports= {
    handlecreatUrl
};