var express = require('express');
var router = express.Router();
const library = require('./app')

/* GET home page. */
router.use('/library',library)
module.exports = router;
