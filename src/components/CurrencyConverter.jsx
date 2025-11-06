import React, { useState } from "react";
import axios from "axios";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (amount.trim() === "" || isNaN(amount)) {
      setError("⚠ Please enter a valid number.");
      setResult(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.get(`https://infohub-backend-2x4r.onrender.com/currency?amount=${amount}`);

      if (response.data.error) {
        setError(response.data.error)
        setResult(null);
      } else {
        setResult(response.data);
      }
    } catch (err) {
      setError("❌ Failed to fetch currency data. Check if backend is running.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Currency Converter (INR → USD / EUR)</h2>
      <input
        type="text"
        placeholder="Enter amount in INR"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleConvert} style={{ padding: "5px 10px" }}>
        Convert
      </button>

      {loading && <p>⏳ Converting...</p>}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {result && !error && (
        <div style={{ marginTop: "10px" }}>
          <p>USD: {result.usd}</p>
          <p>EUR: {result.eur}</p>
        </div>
      )}
    </div>
  );
}