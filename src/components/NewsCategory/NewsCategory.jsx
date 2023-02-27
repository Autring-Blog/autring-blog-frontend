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
import Loader from "../Loader/Loader";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import Alert from "../Alert/Alert";

const url = "https://api.theautring.com/api/v1";

const NewsCategory = () => {
  const { category } = useParams();
  const [error, setError] = useState("");

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
      setError(error?.response?.data?.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [category]);
  useEffect(() => {
    if (error) setTimeout(() => setError(""), 3000);
  }, [error]);

  return (
    <>
      <Navbar />
      <hr />
      {!!error?.length && <Alert title={error} />}
      {blogs?.length < 1 ? (
        <div style={{ minHeight: "80vh" }}>
          <Loader />
        </div>
      ) : (
        <div>
          {!loading && <Carousel blogs={blogs} />}
          {!loading && <Intro blogs={blogs} />}
          {!loading && <Trending blogs={blogs} />}
          {!loading && <News blogs={blogs} />}
        </div>
      )}
      <NewsLetter />
      <Footer />
    </>
  );
};
export default NewsCategory;
