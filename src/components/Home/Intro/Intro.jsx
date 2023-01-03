import React from 'react';
import NewsCard from '../Card/NewsCard';
import './Intro.css';

function Intro({ blogs }) {
  return (
    <div className="intro">
      <div className='news-card-list'>
        {blogs && blogs.map((blog) => (
          <NewsCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
}

export default Intro;
