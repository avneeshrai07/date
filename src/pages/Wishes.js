import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/wishes.css';

function Wishes(props) {
  const { name, dob, gender,newAge,snowfall } = props.userData;

  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
  };

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        navigate('/Celebrate'); 
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [clicked, navigate]);

  return (
    <div className='wishesPage'>
      <div className={`content ${clicked ? 'clicked' : ''}`}>
        <div className='img1' onClick={handleClick}></div>
        <div className='WishText'>
          Today is {dob}—YOUR {newAge} BIRTHDAY! 
          On this special day, I want to take a moment to express how deeply I cherish our friendship. 
          Oh {gender}! Your presence brings such warmth and joy to my life. 
          May your day be filled with the same extraordinary happiness and love that you effortlessly bring to everyone around you. 
          As you celebrate, know that you've touched my heart as no one else could. 
          <br />
          Give a high five! 🖐 to my heart above.
        </div>
      </div>

      {/* Snowflakes animation */}
      <div className="snowflakes">
        {[...Array(100)].map((_, index) => (
          <div
            key={index}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}vw`, // Random horizontal position
              animationDuration: `${5 + Math.random() * 10}s`, // Random duration between 5 and 15 seconds
              animationDelay: `-${Math.random() * 10}s` // Random delay up to 10 seconds
            }}
          >
            {snowfall}
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default Wishes;
