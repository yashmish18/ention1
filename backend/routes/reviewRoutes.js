const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Get reviews for a product
router.get('/', reviewController.getReviewsByProduct);
// Add a review
router.post('/', reviewController.addReview);
// (Optional) Delete a review by id
router.delete('/:id', reviewController.deleteReview);

module.exports = router; 