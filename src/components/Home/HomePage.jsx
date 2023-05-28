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
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";

const HomePage = () => {
  const url = "https://api.theautring.com";
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (error) setTimeout(() => setError(""), 3000);
  }, [error]);
  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}/api/v1/getallblog`);
      setBlogs(res.data.data.blog);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

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

export default HomePage;
