import React, { useEffect } from "react";

import NewsCard from "../Home/Card/NewsCard";
import Footer from "../Layout/Footer/Footer";

import share from "../../assets/icons/shareIcon.svg";
import Navbar from "../Layout/Navbar/Navbar";
import Loader from "../Loader/Loader";

import "./NewsDetail.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const url = "https://api.theautring.com";
const NewsDetail = () => {
  const [popUp, setPopUp] = useState(false);
  const handleShare = () => {
    navigator.clipboard.writeText(window.navigation.currentEntry.url);
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 1000);
  };
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [blogs, setBlogs] = useState([]);

  const getBlog = async () => {
    const res = await axios(`${url}/api/v1/getablog/${id}`, {
      xhrFields: {
        withCredentials: true,
      },
      withCredentials: true,
    });
    setBlog(res.data.data.blog);
    console.log(res.data.data.blog);
  };

  const getAllBlogs = async () => {
    const res = await axios(`${url}/api/v1/getallblog`, {
      xhrFields: {
        withCredentials: true,
      },
      withCredentials: true,
    });

    setBlogs(res.data.data.blog);
  };
  useEffect(() => {
    getBlog();
    getAllBlogs();
  }, [id]);

  return (
    <div className="news">
      <Navbar />

      {!blog ? (
        <Loader />
      ) : (
        <div className="hero-section">
          <div className={`pop-up ${popUp ? "show" : "hide"}`}>
            {" "}
            Copied Url{" "}
          </div>
          <div className="icons">
            <div className="icon share-icon" onClick={handleShare}>
              <img src={share} alt="" />
            </div>
          </div>
          <div className="hero-image">
            <img src={blog.photo} alt="img" />
          </div>
          <div className="hero-content">
            <h2>{blog && blog.mainHeading}</h2>
          </div>
        </div>
      )}
      <div className="news-content">
        <div>
          <p className="lead">{blog && blog.paragraphDescription}</p>
        </div>
        <div className="articles">
          <h2>Related Articles</h2>
          <div className="news-card-list">
            {blogs &&
              blogs.map((blog) => <NewsCard blog={blog} key={blog._id} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
