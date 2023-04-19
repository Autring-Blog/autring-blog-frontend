import React, { useEffect } from "react";
import NewsCard from "../Home/Card/NewsCard";
import Footer from "../Layout/Footer/Footer";
import { IoMdShare } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Navbar from "../Layout/Navbar/Navbar";
import Loader from "../Loader/Loader";
import "./NewsDetail.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Alert from "../Alert/Alert";

const url = "https://api.theautring.com";
const NewsDetail = () => {
  const [popUp, setPopUp] = useState(false);
  const { id } = useParams();
  const [blog, setBlog] = useState();
  const [blogs, setBlogs] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState("");
  const handleShare = () => {
    navigator.clipboard.writeText(window.navigation.currentEntry.url);
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
    }, 1000);
  };
  const handleLike = async () => {
    setIsLiked((prev) => !prev);
    try {
      await axios.patch(
        `http://localhost:4011/api/v1/likeblog/${id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {
      setIsLiked((prev) => !prev);
      setError(err.response.data.message);
      console.log(err);
    }
  };
  const getBlog = async () => {
    const res = await axios(`${url}/api/v1/getablog/${id}`, {
      xhrFields: {
        withCredentials: true,
      },
      withCredentials: true,
    });
    setBlog(res.data.data.blog);
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
  const checkLike = async () => {
    if (localStorage.getItem("token")) {
      axios
        .get(`http://localhost:4011/api/v1/checklike/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setIsLiked(res.data.data.like);
        })
        .catch((err) => {
          setError(err.response.data.message);
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getBlog();
    getAllBlogs();
    checkLike();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (error.length) setTimeout(() => setError(""), 3000);
  }, [error]);
  return (
    <div className="news">
      <Navbar />
      {!blog ? (
        <Loader />
      ) : (
        <div className="hero-section container">
          {!!error.length && <Alert title={error} />}
          <div className="thumbnail">
            <div className={`pop-up ${popUp ? "show" : "hide"}`}>
              Copied Url
            </div>
            <div className="icons">
              {isLiked ? (
                <AiFillHeart onClick={() => handleLike()} className="liked" />
              ) : (
                <AiOutlineHeart onClick={() => handleLike()} />
              )}
              <IoMdShare onClick={() => handleShare()} />
            </div>
            <div className="hero-image">
              <img src={blog.photo} alt="img" />
            </div>
            <div className="hero-content">
              <h2>{blog && blog.mainHeading}</h2>
            </div>
          </div>
          <div>
            <p className="lead">{blog && blog.paragraphDescription}</p>
          </div>
        </div>
      )}
      <div className="news-content container">
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
