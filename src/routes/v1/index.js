const express = require('express');
const CityController = require('../../controllers/city-controller');
const {InfoController} = require('../../controllers');

const router = express.Router();

router.get('/info',InfoController.info);
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);

module.exports = router;