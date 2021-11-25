const reviewDataMapper = require('../dataMappers/reviewDataMapper');


module.exports = {
    // get All accommodation
    async getAllReview(_, response, next) {
        try {
            const review = await reviewDataMapper.getAllReview();

            response.json({ 
                message: 'All review',
                data: review 
            });
        } catch (error) {
            next(error);
        }
    },
    // get One accommodation
    async getOneReview(request, response, next) {
        try {
            const { id } = request.params;
            const review = await reviewDataMapper.getOneReview(id);
            response.json({ 
                message: 'one review',
                data: review
            });
        } catch (error) {
            next(error);
        }
    },
}
