import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./card/BlogCard";
import { logOut } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import {  useFormik } from "formik";
import { Form_validation} from "./Form_validation";


import "./Dashboard.css";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";


const onSubmit = async(values, actions)=>{
  console.log(values );
  

  try {
    const postBlog = await axios.post(
      "https://api.theautring.com/api/v1/postablog",
      {
        File,
      } = values,
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
    // reset();
    // getAllBlogs();

    console.log(res.data);
  } catch (err) {
    console.error("error post the blog", err);
  }
};


const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
<<<<<<< HEAD

  const{
    values,
    errors,
    
    handleBlur,
    handleChange,
    handleSubmit,

  } = useFormik({
    initialValues:{
      File:'',
      inphotoTitle:'',
      Category:'',
      Main_Heading:'',
      description:'',
    },
    validationSchema:Form_validation,
    onSubmit,

  });
 

 
=======
  const Token = localStorage.getItem("token");
>>>>>>> origin/main
  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.theautring.com/api/v1/getallblog"
        // {
        //   xhrFields: {
        //     withCredentials: true,
        //   },
        //   withCredentials: true,
        // }
      );

      setBlogList(res.data.data.blog);
      console.log(res.data.data.blog);
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
<<<<<<< HEAD
    values = ""
=======
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
            Authorization: `Bearer ${Token}`,
          },
          // xhrFields: {
          //   withCredentials: true,
          // },
          // withCredentials: true,
        }
      );
      console.log("hello");
      const res = await postBlog;
      reset();
      getAllBlogs();

      console.log(res.data);
    } catch (error) {
      console.error("error post the blog", error);
      setError(error?.response?.data?.message);
    }
>>>>>>> origin/main
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
    const editPost = blogList.filter((item) => id === item._id);
    const {
      _id,
      Category,
      File,
      inphotoTitle,
      Main_Heading,
      description,
    } = editPost[0];
    setIsEdit(true);
    setItemId(_id);

    console.log(editPost);
    console.log(editPost[0]);
    reset();
    const formData = new FormData();
    formData.append("File",File);
    formData.append("description", description);
    formData.append("Category", Category);
    formData.append("inphotoTitle", inphotoTitle);
    formData.append("Main_Heading", Main_Heading);
    console.log(formData);


    return editPost[0];
  };

  const editPost = async () => {
    const id = itemId;
    const config = {
      headers: { Authorization: `Bearer ${Token}` },
    };
    try {
      const updateBlog = await axios.patch(
        `https://api.theautring.com/api/v1/updateblog/${id}`,

        {
         values
        },

        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      const updateFile = await axios.patch(
        `https://api.theautring.com/api/v1/updateblogchooseFile/${id}`,
        { values },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Token}`,
          },
          // xhrFields: {
          //   withCredentials: true,
          // },
          // withCredentials: true,
        }
      );
      const res = await updateBlog;
      const changeFile = await updateFile;
      getAllBlogs();
      // reset();
      setIsEdit(false);
      console.log(res);
      console.log(changeFile);
    } catch (error) {
      console.error("Something went wrong", error);
      setError(error?.response?.data?.message);
    }
  };
  const handleLogOut = () => {
    dispatch(logOut);
    navigate("/signin");
  };
 
   

  return (
    <>
<<<<<<< HEAD
      <div className="dashboard">
        <div className="left-dashboard">
          <button className="btn-logout" onClick={handleLogOut}>
            logout
          </button>
    <form onSubmit={handleSubmit} autoComplete="off">
         
     <input
      className="form-control"
      id="File"
        value={values.File}
        onChange={handleChange}
       
        type="file"
        placeholder="Choose Your File"
       
      />
     
    
      <input
      className="form-control"
        id="inphotoTitle"
        type="text"
        placeholder="Photo Title"
        value={values.inphotoTitle}
        onChange={handleChange}
        onBlur={handleBlur}
       
        
      />
      {errors.inphotoTitle && <p className="error">{errors.inphotoTitle}</p>}
   
          <select
          className="form-control"
            id="Category"
            onChange={handleChange}
            placeholder="Please choose Category"
            value={values.Category}
            onBlur={handleBlur}
          >
            <option value="select">Select Category</option>
            <option value="international">International</option>
            <option value="national">National</option>
            <option value="politics">Politics</option>
            <option value="defence">Defence</option>
            <option value="sports">Sports</option>
            <option value="education">Education</option>
            <option value="science and technology">Science and Technology</option>
            <option value="other">Other</option>
          </select>
     
      <input
      className="form-control"
        id="Main_Heading"
        type="text"
        placeholder="Main Heading"
        value={values.Main_Heading}
        onChange={handleChange}
        onBlur={handleBlur}
      />    
       {errors.Main_Heading && <p className="error">{errors.Main_Heading}</p>}
=======
      <button className="btn-logout" onClick={handleLogOut}>
        logout
      </button>
      {!!error.length && <Alert title={error} />}
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
>>>>>>> origin/main

        <div className="form-control">
        <textarea         
        id="description"
        type="textarea"
        placeholder="Description"
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
        rows ="10"
        cols = "30">
        </textarea>
        </div>
            {!isEdit ? (
                  <button type="submit" onClick={onSubmit}>
                    Add
                  </button>
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
