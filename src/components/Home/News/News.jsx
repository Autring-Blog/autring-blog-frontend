import React from 'react';
import './News.css';
import NewsCard from '../Card/NewsCard';

function News({ blogs }) {
  return (
    <div className='news'>
      <h1 className='news_main_heading'>Latest News</h1>
      <div className='news_container'>
        <div className='news-card-list'>
          {blogs && blogs.map((blog) => (
            <NewsCard blog={blog} key={blog._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
