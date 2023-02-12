import { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar/Navbar";
import "./HomePage.css";
import Footer from "../Layout/Footer/Footer";
import Intro from "./Intro/Intro";
import Trending from "./Trending/Trending";
import News from "../Home/News/News";
import NewsLetter from "./NewsLetter/NewsLetter";
import Carousel from "./Carousel/Carousel";
import axios from "axios";
const url = "https://api.theautring.com";
const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}/api/v1/getallblog`);
      setBlogs(res.data.data.blog);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

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

      <NewsLetter />
      <Footer />
    </>
  );
};

export default HomePage;
