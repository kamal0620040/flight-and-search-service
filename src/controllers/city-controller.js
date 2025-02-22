const { StatusCodes } = require('http-status-codes');
const { CityService } = require('../services/index');

const cityService  = new CityService();

/*
* POST
* data -> req.body
*/
const create = async (req, res) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        });
    } catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to create a city',
            err: error,
        });
    }
}

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to delete a city',
            err: error,
        });
    }
}

// GET, /city/:id
const get = async (req, res) => {
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: city,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to get a city',
            err: error,
        });
    }
}

// PATCH, /city/:id, req.body
const update = async (req, res) => {
    try{
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(StatusCodes.CREATED).json({
            data: city,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch(error){
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: 'Not able to update a city',
            err: error,
        });
    }
}

const getAll = async (req, res) => {
 try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(StatusCodes.CREATED).json({
        data: cities,
        success: true,
        message: 'Fetched all the city',
        err: {}
    });
 } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        data: {},
        success: false,
        message: 'Not able to get a city',
        err: error,
    });
 }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}