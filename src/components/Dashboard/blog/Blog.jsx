import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../card/BlogCard";
import Loader from "../../Loader/Loader";
import Alert from "../../Alert/Alert";
import "./Blog.css";

const Blog = () => {
  const [openForm, setOpenForm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [inPhotoTitle, setInPhotoTitle] = useState("");
  const [category, setCategory] = useState("category");
  const [mainHeading, setMainHeading] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [paragraphDescription, setParagraphDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState("");
  const Token = localStorage.getItem("token");
  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.theautring.com/api/v1/getallblog"
      );

      setBlogList(res.data.data.blog);
      setLoading(false);
    } catch (err) {
      console.error("something went wrong", err);
      setError(err.message);
    }
  };
  useEffect(() => {
    getAllBlogs();
    setIsEdit(false);
  }, []);
  useEffect(() => {
    if (error.length) setTimeout(() => setError(""), 3000);
  }, [error]);
  const reset = () => {
    setPhoto(null);
    setInPhotoTitle("");
    setCategory("");
    setInPhotoTitle("");
    setMainHeading("");
    setShortDescription("");
    setParagraphDescription("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      inPhotoTitle,
      photo,
      mainHeading,
      shortDescription,
      category,
    });

    try {
      await axios.post(
        "https://api.theautring.com/api/v1/postablog",
        {
          photo,
          inPhotoTitle,
          category,
          mainHeading,
          shortDescription,
          paragraphDescription,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      reset();
      getAllBlogs();
    } catch (error) {
      console.error("error post the blog", error);
      setError(error?.response?.data?.message);
    }
  };

  const deletePost = async (id) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      try {
        await axios.delete(
          `https://api.theautring.com/api/v1/deleteblog/${id}`,

          {
            headers: {
              Authorization: `Bearer ${Token}`,
            },
          }
        );
        getAllBlogs();
      } catch (error) {
        console.error("Something was wrong", error);
        setError(error?.response?.data?.message);
      }
    }
  };

  const editValue = (id) => {
    setOpenForm(true);
    const editPost = blogList.filter((item) => id === item._id);
    const {
      _id,
      category,
      photo,
      inPhotoTitle,
      mainHeading,
      shortDescription,
      paragraphDescription,
    } = editPost[0];
    setIsEdit(true);
    setItemId(_id);
    reset();
    const formData = new FormData();
    formData.append("photo", photo);
    console.log(formData);

    setPhoto(photo);
    setInPhotoTitle(inPhotoTitle);
    setCategory(category);
    setInPhotoTitle(inPhotoTitle);
    setMainHeading(mainHeading);
    setShortDescription(shortDescription);
    setParagraphDescription(paragraphDescription);
    return editPost[0];
  };

  const editPost = async () => {
    const id = itemId;
    try {
      await axios.patch(
        `https://api.theautring.com/api/v1/updateblog/${id}`,

        {
          category,
          inPhotoTitle,
          mainHeading,
          shortDescription,
          paragraphDescription,
        },

        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      await axios.patch(
        `https://api.theautring.com/api/v1/updateblogphoto/${id}`,
        { photo },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      getAllBlogs();
      reset();
      setIsEdit(false);
    } catch (error) {
      console.error("Something went wrong", error);
      setError(error?.response?.data?.message);
    }
  };

  const Add = () => {
    setOpenForm(true);
  };

  return (
    <div className="blogs">
      {!!error.length && <Alert title={error} />}
      <div className="dashboard">
        <div className="top">
          <h1>Post Blog</h1>
          <span className="add-blog">
            <button onClick={() => Add()}>+</button>
          </span>
        </div>
        <div className={`left-dashboard ${openForm && "form"}`}>
          <form onSubmit={handleSubmit}>
            <div className="top">
              <h1>Post Blog</h1>
              <span
                className="close"
                onClick={() => {
                  setOpenForm(false);
                  setIsEdit(false);
                  setItemId("");
                  reset();
                }}
              >
                X
              </span>
            </div>
            <div className="form-control">
              <input
                type="file"
                name="photo"
                onChange={(e) => setPhoto(e.target.files[0])}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                id="photoTitle"
                value={inPhotoTitle}
                onChange={(e) => setInPhotoTitle(e.target.value)}
                placeholder="Photo Title"
              />
            </div>
            <div className="form-control">
              <select
                required
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="category" disabled>
                  Category
                </option>
                <option value="international">International</option>
                <option value="national">National</option>
                <option value="politics">Politics</option>
                <option value="defence">Defence</option>
                <option value="science and technology">
                  Science and Technology
                </option>
                <option value="sports">Sports</option>
                <option value="education">Education</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="form-control">
              <input
                type="text"
                id="mainHeading"
                value={mainHeading}
                onChange={(e) => setMainHeading(e.target.value)}
                placeholder="Main Heading"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                id="shortDescription"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Short Description"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                type="text"
                id="description"
                value={paragraphDescription}
                onChange={(e) => setParagraphDescription(e.target.value)}
                placeholder="Description"
                rows="10"
                cols="30"
              ></textarea>
            </div>
            {!isEdit ? (
              <button className="add-blog" type="submit">
                Add
              </button>
            ) : (
              <button type="submit" onClick={editPost} className="update-blog">
                Edit
              </button>
            )}
          </form>
        </div>
        <div className="right-dashboard">
          <div className="blog-list">
            {loading ? (
              <Loader />
            ) : (
              blogList.map((blog, idx) => (
                <BlogCard
                  data={blog}
                  deletePost={deletePost}
                  editPost={editValue}
                  key={idx}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
