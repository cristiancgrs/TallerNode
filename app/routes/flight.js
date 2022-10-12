const express = require('express');

const router = express.Router();

const vuelo = require('../controller/flight');


router.get('/flight/:pnr', vuelo.getVuelo);


module.exports = router;