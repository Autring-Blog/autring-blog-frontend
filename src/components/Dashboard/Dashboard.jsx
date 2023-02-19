import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./card/BlogCard";
import { logOut } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import {  useFormik } from "formik";
import { Form_custom } from "./Form_custom";


import "./Dashboard.css";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";


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

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    validationSchema:Form_custom,
    onSubmit,

  });
 

 
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
      console.log(res.data.data.blog);
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
    values = ""
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

    try {
      const updateBlog = await axios.patch(
        `https://api.theautring.com/api/v1/updateblog/${id}`,
        {
         values
        },
        {
          xhrFields: {
            withCredentials: true,
          },
          withCredentials: true,
        }
      );
      const updateFile = await axios.patch(
        `https://api.theautring.com/api/v1/updateblogchooseFile/${id}`,
        { values },
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
      const changeFile = await updateFile;
      getAllBlogs();
      // reset();
      setIsEdit(false);
      console.log(res);
      console.log(changeFile);
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
       
        
      />
      {errors.photoTitle && <p className="error">{errors.photoTitle}</p>}
   
          <select
          className="form-control"
            id="Category"
            onChange={handleChange}
            placeholder="Please choose Category"
            value={values.Category}
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
