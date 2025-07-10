import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { pincode } = req.query;
  if (!pincode) {
    return res.status(400).json({ available: false, message: 'Pincode is required.' });
  }
  const apiKey = process.env.DELHIVERY_API_KEY;
  const baseUrl = process.env.DELHIVERY_BASE_URL || 'https://track.delhivery.com/api/v1';
  try {
    const url = `${baseUrl}/pin-codes/json/?token=${apiKey}&filter_codes=${pincode}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.delivery_codes && data.delivery_codes.length > 0) {
      const available = data.delivery_codes[0].postal_code.delivery;
      return res.status(200).json({ available, message: available ? 'Delivery available for this pincode.' : 'Delivery not available for this pincode.' });
    }
    return res.status(200).json({ available: false, message: 'Pincode not serviceable.' });
  } catch (err) {
    return res.status(500).json({ available: false, message: 'Error checking pincode.' });
  }
} 