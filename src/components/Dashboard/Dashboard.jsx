import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./card/BlogCard";
import { logOut } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import{Formik ,Field,Form} from 'formik';

import "./Dashboard.css";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [chooseFile, setchooseFile] = useState(null);
  const [selectCategory, setselectCategory] = useState("");
  const [shortDescription, setshortDescription] = useState("");
  const [description, setdescription] = useState("");
  const [photoTitle, setphotoTitle] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [
    { value: 'international', label: 'International' },
    { value: 'national', label: 'National' },
    { value: 'politics', label: 'Politics' },
    { value:'defence',    label:'Defence'},
    { value:'science and technology',label:'Science and Technology'},
    { value:'sports',     label:'Sports'},
    { value:'education',  label:'Education'},
    { value:'others',     label:'Others'},
  ];
  

  

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
    setchooseFile(null);
    setselectCategory("");

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
      selectCategory,
      chooseFile,
      photoTitle,
      shortDescription,
      description,
    } = editPost[0];
    setIsEdit(true);
    setItemId(_id);

    console.log(editPost);
    console.log(editPost[0]);
    reset();
    const formData = new FormData();
    formData.append("chooseFile", chooseFile);
    console.log(formData);

    setchooseFile(chooseFile);
    setphotoTitle(photoTitle);
    setselectCategory(selectCategory);
     setshortDescription(shortDescription);
    setdescription(description);
    return editPost[0];
    
  };

  const editPost = async () => {
    const id = itemId;

    try {
      const updateBlog = await axios.patch(
        `https://api.theautring.com/api/v1/updateblog/${id}`,
        {
          selectCategory,
           photoTitle,
           chooseFile,
          shortDescription,
          description,
        },
        {
          xhrFields: {
            withCredentials: true,
          },
          withCredentials: true,
        }
      );
      const updatechooseFile = await axios.patch(
        `https://api.theautring.com/api/v1/updateblogchooseFile/${id}`,
        { chooseFile },
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
      const changechooseFile = await updatechooseFile;
      getAllBlogs();
      reset();
      setIsEdit(false);
      console.log(res);
      console.log(changechooseFile);
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
           <Formik
             initialValues={{
             chooseFile:'',
             chooseFileTitle: '',
             shortDescription: '',
             description: '',
             selectCategory:''
            }}
            onSubmit={(values) => {
             const onSubmit = async (e) => {
          
           console.log({
           chooseFile,
           photoTitle,
           selectCategory,
           shortDescription,
           description,
            });

            try {
           const postBlog = await axios.post(
           "https://api.theautring.com/api/v1/postablog",
           {
            chooseFile,
            photoTitle,
            selectCategory,
            shortDescription,
            description,
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

          }}
    >
         {({ isSubmitting }) => (
           <Form onSubmit={Formik.handleSubmit}>
           <Field name ="chooseFile"type="file" placeholder=" chooseFile" className="form-control" />

           <Field name ="selectCategory" as="select" className="form-control">
            <option value="">Select category</option>

            {options.map(option=>(
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}

            </Field>

            <Field name ="chooseFileTitle"type="text" placeholder="chooseFile title" className="form-control"/>

            <Field name="shortDescription" placeholder="shortDescription" type="text"className="form-control"/>

            <div className="form-control">
              <textarea
                type="text"
                id="description"
                placeholder="Description"
                rows="10"
                cols="30"
              ></textarea>
            </div>
           </Form>
           )}
           
         </Formik>
            {!isEdit ? (
              <button type ="submit" >Add</button>
            ) : (
              <button type="button" onClick={editPost}>
                Edit
              </button>
            )}
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
