import model from '../database/models';

const { Review } = model;

export default class reviewController {
    // get all reviews
    static async getAllReviews(req, res) {
        try {
            const allReviews = await Review.findAll({});

            return res.status(200).json({
                message: 'All reviews found successfully!',
                allReviews
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error!'
            });
        }
    };

    // create a review
    static async addReview(req, res) {
        try {
            const addedReview = await Review.create(req.body);

            return res.status(201).json({
                message: 'Review created successfully!',
                data: addedReview
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error!'
            });
        }
    };
};