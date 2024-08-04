const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.API_KEY;
  
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }
  
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = response.data;
    res.json({
      city: data.name,
      temperature: (data.main.temp - 273.15).toFixed(2),
      description: data.weather[0].description,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

module.exports = router;
