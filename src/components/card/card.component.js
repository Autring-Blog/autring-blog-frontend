import React from 'react';

import './card.styles.css';

const Card = ({ data }) => {
  return (
    <div className='card'>
      <div className='black-background'></div>
      <div className='card-image'>
        <img src={require(`../../assets/${data.img}`)} alt='img' />
      </div>
      <p>International</p>
    </div>
  );
};

export default Card;
