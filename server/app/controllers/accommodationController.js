const accommodationDataMapper = require('../dataMappers/accommodationDataMapper');


module.exports = {
    // get All accommodation
    async getAllAccommodation(_, response, next) {
        try {
            const accommodation = await accommodationDataMapper.getAllAccommodation();

            response.json({ 
                message: 'All accommodation',
                data: accommodation 
            });
        } catch (error) {
            next(error);
        }
    },
    // get One accommodation
    async getOneAccommodation(request, response, next) {
        try {
            const { id } = request.params;
            const accommodation = await accommodationDataMapper.getOneAccommodation(id);
            response.json({ 
                message: 'one accommodation',
                data: accommodation
            });
        } catch (error) {
            next(error);
        }
    },
}


