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
        <img src={require(`../../../assets/images/${data.img}`)} alt='img' />
      </div>
      <div className='content'>
        <p>{data.name}</p>
      </div>
    </div>
  );
};

export default FavouriteCard;
