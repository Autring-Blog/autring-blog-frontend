import React from 'react';
import './Trending.css';
// import { KeyboardArrowRight, Search } from "@material-ui/icons";
import NewsCard from '../Card/NewsCard';

function News() {
  return (
    <div className='trending'>
      <form className='trending_search_form'>
        {/* <Search className='search_icon' /> */}
        <input type='text' name='search' placeholder='Search' />
      </form>
      <h1 className='trending_main_heading'>Trending</h1>
      <div className='trending_container'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

export default News;
