import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    axios.get('https://infohub-backend-2x4r.onrender.com/quote') // Update URL if your backend is on a different port or domain
      .then(response => {
        setQuote(response.data.quote);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch quote');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading quote...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Quote</h2>
      <blockquote style={{ fontStyle: 'italic', marginTop: '10px' }}>
        {quote}
      </blockquote>
    </div>
  );
}