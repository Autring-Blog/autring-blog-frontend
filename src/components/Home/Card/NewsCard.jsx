import React from 'react';

import './NewsCard.css';

const NewsCard = () => {
  return (
    <div className='news-card'>
      <div className='image-wrapper'>
        <img src={require('../../../assets/images/news-card.png')} alt='' />
      </div>
      <div className='news-card-content'>
        <h3>
          Tejas Mark-2 megaproject approved by Cabinet Committee on Security
        </h3>

        <p>
          Tejas Mark-2 project has received approval from the PM led Cabinet
          Committee on Security, advancing India's push for indigenous fighter
          aircraft as Tejas Mark-2 project.
        </p>
        <div className='news-card-btn'>
          <a href=''>
            Read more
            <span className='material-symbols-outlined'>chevron_right</span>{' '}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
