import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/birthday.css';

function BirthDay(props) {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const navigate = useNavigate();
  const prevAge = props.userData.prevAge;

  const handleToggle = (index) => {
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);

    if (newCandles.every(candle => !candle)) {
      navigate('/Wishes');
    }
  };

  return (
    <div className='candlePage'>
      {!candles.every(candle => !candle) && (
        <div className="smoky-text">
          {prevAge} is Gone
        </div>
      )}
      {candles.map((isLit, index) => (
        <div
          className="holder"
          key={index}
          onMouseEnter={() => handleToggle(index)} // For desktop hover
          onTouchStart={() => handleToggle(index)} // For touch devices
        >
          <div className={`candle ${isLit ? '' : 'off'}`}>
            <div className="blinking-glow"></div>
            <div className="thread"></div>
            <div className="glow"></div>
            <div className="flame"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BirthDay;
