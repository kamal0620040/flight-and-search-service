const CRUDService = require('./crud-service');
const {AirportRepository} = require('../repositories/index');  

class AirportService extends CRUDService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportService;