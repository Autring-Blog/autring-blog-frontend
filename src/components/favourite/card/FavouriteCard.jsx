import React from 'react';
import { useState } from 'react';

import './FavouriteCard.css';
const FavouriteCard = ({ data }) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(!select);
  };

  return (
    <div className={`card`} onClick={handleClick}>
      <div className={`${select ? 'select' : ''}`}></div>
      <div className='black-background'></div>
      <div className='card-image'>
        <img src={require(`../../../assets/${data.img}`)} alt='img' />
      </div>
      <p>{data.name}</p>
    </div>
  );
};

export default FavouriteCard;
