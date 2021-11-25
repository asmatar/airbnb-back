const accommodationDataMapper = require('../dataMappers/accommodationDataMapper');


module.exports = {
    // get All accommodation
    async getAllAccommodation(_, response, next) {
        try {
            const accommodation = await accommodationDataMapper.getAllAccommodation();

            response.json({ 
                message: 'All accommodation',
                searchResult: accommodation
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
                searchResult: accommodation
            });
        } catch (error) {
            next(error);
        }
    },
    async getReviewFromOneAccommodation(request, response, next) {
        try {
            const { id } = request.params;
            const accommodation = await accommodationDataMapper.getReviewFromOneAccommodation(id);
            console.log(accommodation)
            response.json({ 
                message: 'all reviews from one accomodation',
                searchResult: accommodation
            });
           
        } catch (error) {
            next(error);
        }
    },
    
}


