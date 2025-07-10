const Review = require('../models/Review');

// Get all reviews for a product
exports.getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.query;
    if (!productId) return res.status(400).json({ error: 'Missing productId' });
    const reviews = await Review.find({ productId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new review
exports.addReview = async (req, res) => {
  try {
    const { name, rating, text, productId, images, videos } = req.body;
    if (!name || !rating || !text || !productId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const review = new Review({ name, rating, text, productId, images, videos });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// (Optional) Delete a review by ID
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 