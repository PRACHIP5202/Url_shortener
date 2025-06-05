const express = require('express');
const router = express.Router();
const { handlecreateUrl } = require('../controllers/url');

router.post('/', handlecreateUrl);


module.exports = router;