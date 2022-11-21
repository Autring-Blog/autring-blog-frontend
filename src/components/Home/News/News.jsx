import React from 'react';
import './News.css';
import NewsCard from '../Card/NewsCard';

function News() {
  return (
    <div className='news'>
      <h1 className='news_main_heading'>Latest News</h1>
      <div className='news_container'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

export default News;
