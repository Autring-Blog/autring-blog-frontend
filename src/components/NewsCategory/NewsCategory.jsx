import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import Intro from "../Home/Intro/Intro";
import Carousel from "../Home/Carousel/Carousel";
import Trending from "../Home/Trending/Trending";
import News from "../Home/News/News";
import axios from "axios";
import "../Home/HomePage.css";

const url = "https://api.theautring.com/api/v1";

const NewsCategory = () => {
  const { category } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}/getallblog?category=${category}`, {
        xhrFields: {
          withCredentials: true,
        },
        withCredentials: true,
      });

      setBlogs(res.data.data.blog);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [category]);

  return (
    <>
      <Navbar />
      <hr />
      {blogs.length < 1 ? (
        <h1 style={{ textAlign: "center" }}>no blogs yet</h1>
      ) : (
        <div>
          {!loading && <Carousel blogs={blogs} />}
          {!loading && <Intro blogs={blogs} />}
          {!loading && <Trending blogs={blogs} />}
          {!loading && <News blogs={blogs} />}
        </div>
      )}
      <Footer />
    </>
  );
};
export default NewsCategory;
