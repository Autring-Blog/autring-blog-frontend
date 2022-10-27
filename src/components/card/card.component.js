import React from 'react';
import { useState } from 'react';

import './card.styles.css';

const Card = ({ data }) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <div className={`card`} onClick={handleClick}>
      <div className={`${select ? 'select' : ''}`}>
        <div className='black-background'></div>
        <div className='card-image'>
          <img src={require(`../../assets/${data.img}`)} alt='img' />
        </div>
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default Card;
