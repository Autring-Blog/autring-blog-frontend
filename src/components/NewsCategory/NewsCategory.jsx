import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Layout/Navbar/Navbar';
import Footer from '../Layout/Footer/Footer';
import Intro from '../Home/Intro/Intro'
import Carousel from '../Home/Carousel/Carousel'
import Trending from '../Home/Trending/Trending'
import News from '../Home/News/News'
import axios from 'axios';
import '../Home/HomePage.css';


const url = 'https://www.theautring.com/api/v1';

const NewsCategory = () => {
  const { category } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllBlogs = async () => {
    setLoading(true);
    const res = await axios.get(`${url}/getallblog`,
      {
        xhrFields: {
          withCredentials: true,
        },
        withCredentials: true,
      });

    setBlogs(res.data.data.blog);
    setLoading(false);
  }

  useEffect(() => {
    getAllBlogs();
  }, [])

  return (
    <>
      <Navbar />
      <hr />
      {!loading && <Carousel blogs={blogs} />}
      {!loading && <Intro blogs={blogs} />}
      {!loading && <Trending blogs={blogs} />}
      {!loading && <News blogs={blogs} />}
      <Footer />
    </>
  );
};
export default NewsCategory


