import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewSection = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', rating: 0, text: '', images: [], videos: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchReviews();
    // eslint-disable-next-line
  }, [productId]);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/reviews?productId=${productId}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        setReviews(data);
      } else {
        setReviews([]);
        setError(data?.error || 'Failed to load reviews');
      }
    } catch (err) {
      setError('Failed to load reviews');
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files);
    setForm((prev) => ({ ...prev, [type]: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    if (form.rating === 0) {
      setError('Please select a rating.');
      setLoading(false);
      return;
    }
    try {
      // For now, just store file names (no actual upload)
      const images = form.images.map(f => f.name);
      const videos = form.videos.map(f => f.name);
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          rating: form.rating,
          text: form.text,
          productId,
          images,
          videos
        })
      });
      if (!res.ok) throw new Error('Failed to submit review');
      setSuccess('Review submitted!');
      setForm({ name: '', rating: 5, text: '', images: [], videos: [] });
      fetchReviews();
    } catch (err) {
      setError('Failed to submit review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full mx-auto my-12 p-10 px-8 bg-white shadow-lg text-black">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-600 mb-2">{success}</div>}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-2">
          <label className="block font-semibold">Name</label>
          <input name="name" value={form.name} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Rating</label>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map(r => (
              <FaStar
                key={r}
                size={24}
                className={
                  r <= form.rating
                    ? 'text-yellow-400 cursor-pointer'
                    : 'text-gray-300 cursor-pointer'
                }
                onClick={() => setForm(prev => ({ ...prev, rating: r }))}
                data-testid={`star-${r}`}
              />
            ))}
            <span className="ml-2 text-sm">{form.rating} Star{form.rating > 1 ? 's' : ''}</span>
          </div>
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Review</label>
          <textarea name="text" value={form.text} onChange={handleInputChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Photos</label>
          <input type="file" accept="image/*" multiple onChange={e => handleFileChange(e, 'images')} />
          <div className="flex gap-2 mt-2">
            {form.images && form.images.map((file, idx) => (
              <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{file.name}</span>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <label className="block font-semibold">Videos</label>
          <input type="file" accept="video/*" multiple onChange={e => handleFileChange(e, 'videos')} />
          <div className="flex gap-2 mt-2">
            {form.videos && form.videos.map((file, idx) => (
              <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">{file.name}</span>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-[#007e9e] text-white px-6 py-2 rounded font-bold mt-2" disabled={loading}>Submit Review</button>
      </form>
      <div>
        {(!Array.isArray(reviews) || reviews.length === 0) && <div>No reviews yet. Be the first to review!</div>}
        {Array.isArray(reviews) && reviews.map((review, idx) => (
          <div key={idx} className="border-b border-gray-200 py-4 mb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold">{review.name}</span>
              <span className="text-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</span>
              <span className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="mb-1">{review.text}</div>
            {review.images && review.images.length > 0 && (
              <div className="flex gap-2 mt-1">
                {review.images.map((img, i) => (
                  <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{img}</span>
                ))}
              </div>
            )}
            {review.videos && review.videos.length > 0 && (
              <div className="flex gap-2 mt-1">
                {review.videos.map((vid, i) => (
                  <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{vid}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection; 