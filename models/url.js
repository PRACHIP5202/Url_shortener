const mongoose = require('mongoose');
const urlSchema =  new mongoose.Schema({                       //schema
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectedUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number}}],
}, {timestamps: true}
);

const Url = mongoose.model('Url', urlSchema);                    //model

module.exports = Url;