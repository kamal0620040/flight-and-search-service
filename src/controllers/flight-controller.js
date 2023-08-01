const {FlightService} = require('../services/index');
const { StatusCodes } = require('http-status-codes');
const flightService = new FlightService();

/*
* POST
* data -> req.body
*/
const create = async (req, res) => {
    try{
        const flight = await flightService.createFlight(req.body);

        return res.status(StatusCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    } catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error,
        });
    }
}

const getAll = async(req, res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights',
        })
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error,
        });
    }
}

module.exports = {
    create,
    getAll,
}