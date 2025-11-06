import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function WeatherModule() {
  const [weather, setWeather] = useState({ city: '', temperature: '', condition: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch weather from backend
  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get('https://infohub-backend-2x4r.onrender.com/weather')
      .then(response => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch weather data');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>
      {loading && <p>Loading weather...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <div>
          <p>City: {weather.city}</p>
          <p>Temperature: {weather.temperature}</p>
          <p>Condition: {weather.condition}</p>
        </div>
      )}
    </div>
  );
}