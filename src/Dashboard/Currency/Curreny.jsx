// Currency.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Currency.scss';

const Currency = () => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [lastRequestTime, setLastRequestTime] = useState(null);

  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get('API_URL_HERE'); // Adaugă URL-ul real al API-ului pentru cursul valutar
      const { rate, time } = response.data;

      setExchangeRate(rate);
      setLastRequestTime(time);
      localStorage.setItem('exchangeRate', JSON.stringify({ rate, time }));
    } catch (error) {
      console.error('Error fetching exchange rate:', error.message);
    }
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('exchangeRate'));
    const oneHourInMilliseconds = 60 * 60 * 1000;

    if (
      !storedData ||
      !storedData.rate ||
      !storedData.time ||
      new Date() - new Date(storedData.time) > oneHourInMilliseconds
    ) {
      fetchExchangeRate();
    } else {
      setExchangeRate(storedData.rate);
      setLastRequestTime(storedData.time);
    }
  }, []);

  return (
    <div className="currency-container">
      <h3 className="currency-title">Current Exchange Rate</h3>
      {exchangeRate ? (
        <div>
          <p className="exchange-rate">{`1 USD = ${exchangeRate} EUR`}</p>
          <p className="last-update">{`Last updated: ${new Date(
            lastRequestTime
          ).toLocaleString()}`}</p>
        </div>
      ) : (
        <p className="error-message">Error fetching exchange rate.</p>
      )}
    </div>
  );
};

export default Currency;
