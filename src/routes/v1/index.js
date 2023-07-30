const express = require('express');
const CityController = require('../../controllers/city-controller');
const {InfoController} = require('../../controllers');

const router = express.Router();

router.get('/info',InfoController.info);
router.post('/city',CityController.create);

module.exports = router;