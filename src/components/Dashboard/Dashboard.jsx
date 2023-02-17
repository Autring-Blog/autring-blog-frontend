import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./card/BlogCard";
import { logOut } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";

import "./Dashboard.css";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [inPhotoTitle, setInPhotoTitle] = useState("");
  const [category, setCategory] = useState("");
  const [mainHeading, setMainHeading] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [paragraphDescription, setParagraphDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.theautring.com/api/v1/getallblog",
        {
          xhrFields: {
            withCredentials: true,
          },
          withCredentials: true,
        }
      );

      setBlogList(res.data.data.blog);
      setLoading(false);
    } catch (err) {
      console.error("something went wrong", err);
    }
  };
  useEffect(() => {
    getAllBlogs();
    setIsEdit(false);
  }, []);

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
      const postBlog = await axios.post(
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
          },
          xhrFields: {
            withCredentials: true,
          },
          withCredentials: true,
        }
      );

      const res = await postBlog;
      reset();
      getAllBlogs();

      console.log(res.data);
    } catch (err) {
      console.error("error post the blog", err);
    }
  };

  const deletePost = async (id) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      try {
        await axios.delete(
          `https://api.theautring.com/api/v1/deleteblog/${id}`,
          {
            xhrFields: {
              withCredentials: true,
            },
            withCredentials: true,
          }
        );
        getAllBlogs();
      } catch (error) {
        console.error("Something was wrong", error);
      }
    }
  };

  const editValue = (id) => {
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

    console.log(editPost);
    console.log(editPost[0]);
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
      const updateBlog = await axios.patch(
        `https://api.theautring.com/api/v1/updateblog/${id}`,
        {
          category,
          inPhotoTitle,
          mainHeading,
          shortDescription,
          paragraphDescription,
        },
        {
          xhrFields: {
            withCredentials: true,
          },
          withCredentials: true,
        }
      );
      const updatePhoto = await axios.patch(
        `https://api.theautring.com/api/v1/updateblogphoto/${id}`,
        { photo },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          xhrFields: {
            withCredentials: true,
          },
          withCredentials: true,
        }
      );
      const res = await updateBlog;
      const changePhoto = await updatePhoto;
      getAllBlogs();
      reset();
      setIsEdit(false);
      console.log(res);
      console.log(changePhoto);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };
  const handleLogOut = () => {
    dispatch(logOut);
    navigate("/signin");
  };

  return (
    <>
      <button className="btn-logout" onClick={handleLogOut}>
        logout
      </button>
      <div className="dashboard">
        <div className="left-dashboard">
          <form onSubmit={handleSubmit}>
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
              {/* <input
								type="text"
								id="category"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
								placeholder="Category"
								required
							/> */}
              <select
                required
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option selected disabled>
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
              <button>Add</button>
            ) : (
              <button type="button" onClick={editPost}>
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
    </>
  );
};

export default Dashboard;
