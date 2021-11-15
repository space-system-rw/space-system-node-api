import { Router } from 'express';
import reviewController from '../controllers/reviewController';

const router = new Router(),
    {
        getAllReviews, addReview
    } = reviewController;

// get all reviews
router.get('/', getAllReviews);

// create a review
router.post('/', addReview);

export default router;