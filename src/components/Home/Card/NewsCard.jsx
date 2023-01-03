import React from 'react';
import { Link } from 'react-router-dom';

import './NewsCard.css';

const NewsCard = ({ blog }) => {
  return (
    <div className='news-card'>
      <div className='image-wrapper'>
        <img src={blog.photo[0]} alt='' />
      </div>
      <div className='news-card-content'>
        <h3 className='news_cardHeading'>
          {blog.mainHeading.length > 80 ? 
                    blog.mainHeading.substring(0, 80) + " ...." : 
                    blog.mainHeading}
        </h3>

        <p>
          {blog.shortDescription.length > 150 ? 
                    blog.shortDescription.substring(0, 150) + " ...." : 
                    blog.shortDescription}
        </p>
        <div className='news-card-btn'>
          <Link to={`/blog/${blog._id}`}>
            Read more
            <span className='material-symbols-outlined'>chevron_right</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
