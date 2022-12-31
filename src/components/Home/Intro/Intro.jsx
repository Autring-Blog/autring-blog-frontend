import React from 'react';
import NewsCard from '../Card/NewsCard';
import './Intro.css';

function Intro() {
  return (
    <div className='intro'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default Intro;
