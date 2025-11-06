import React, { useState } from 'react';
import WeatherModule from './components/WeatherModule';
import CurrencyConverter from './components/CurrencyConverter';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  const [activeTab, setActiveTab] = useState('weather');

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1 style={{ marginLeft: "30px", marginBottom: "50px" }}>🌐 InfoHub</h1>
      <nav style={{ marginBottom: "30px" }}>
        <button
          onClick={() => setActiveTab("weather")}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            margin: "10px",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Weather
        </button>

        <button
          onClick={() => setActiveTab("currency")}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            margin: "10px",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Currency
        </button>

        <button
          onClick={() => setActiveTab("quote")}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            margin: "10px",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          Quote
        </button>
      </nav>

      <main>
        {activeTab === 'weather' && <WeatherModule />}
        {activeTab === 'currency' && <CurrencyConverter />}
        {activeTab === 'quote' && <QuoteGenerator />}
      </main>
    </div>
  );
}

export default App;