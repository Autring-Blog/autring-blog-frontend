import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './card/BlogCard';

import './Dashboard.css';
import Loader from '../Loader/Loader';
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [inPhotoTitle, setInPhotoTitle] = useState('');
  const [category, setCategory] = useState('');
  const [mainHeading, setMainHeading] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [paragraphDescription, setParagraphDescription] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setItemId] = useState('');

  const getAllBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios({
        url: 'https://infinite-cove-18126.herokuapp.com/api/v1/getallblog',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjFlNDYxMzMxMzhhY2ZjNzQwNDM2MSIsImlhdCI6MTY2ODE4MTMxOCwiZXhwIjoxNjcwNzczMzE4fQ.KgVQNvodVCgAPU99mnektiz5KGAgrsReBDBFiT5SVgM',
        },
      });

      setBlogList(res.data.data.blog);
      console.log(res.data.data.blog);
      setLoading(false);
    } catch (err) {
      console.error('something went wrong', err);
    }
  };
  useEffect(() => {
    getAllBlogs();
    setIsEdit(false);
  }, []);

  const reset = () => {
    setPhoto(null);
    setInPhotoTitle('');
    setCategory('');
    setInPhotoTitle('');
    setMainHeading('');
    setShortDescription('');
    setParagraphDescription('');
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
        'https://infinite-cove-18126.herokuapp.com/api/v1/postablog',
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
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjFlNDYxMzMxMzhhY2ZjNzQwNDM2MSIsImlhdCI6MTY2ODE4MTMxOCwiZXhwIjoxNjcwNzczMzE4fQ.KgVQNvodVCgAPU99mnektiz5KGAgrsReBDBFiT5SVgM',
            'Content-Type': 'multipart/form-data',
          },
          xhrFields: {
            withCredentials: true,
          },
        }
      );

      const res = await postBlog;
      reset();
      getAllBlogs();

      console.log(res.data);
    } catch (err) {
      console.error('error post the blog', err.message);
    }
  };

  const deletePost = async (id) => {
    const confirm = window.confirm('Are you sure ?');
    if (confirm) {
      try {
        await axios.delete(
          `https://infinite-cove-18126.herokuapp.com/api/v1/deleteblog/${id}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjFlNDYxMzMxMzhhY2ZjNzQwNDM2MSIsImlhdCI6MTY2ODE4MTMxOCwiZXhwIjoxNjcwNzczMzE4fQ.KgVQNvodVCgAPU99mnektiz5KGAgrsReBDBFiT5SVgM',
              'Content-Type': 'multipart/form-data',
            },
            xhrFields: {
              withCredentials: true,
            },
          }
        );
        getAllBlogs();
      } catch (error) {
        console.error('Something was wrong', error);
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
    formData.append('photo', photo);
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
        `https://infinite-cove-18126.herokuapp.com/api/v1/updateblog/${id}`,
        {
          category,
          photo,
          inPhotoTitle,
          mainHeading,
          shortDescription,
          paragraphDescription,
        },
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjFlNDYxMzMxMzhhY2ZjNzQwNDM2MSIsImlhdCI6MTY2ODE4MTMxOCwiZXhwIjoxNjcwNzczMzE4fQ.KgVQNvodVCgAPU99mnektiz5KGAgrsReBDBFiT5SVgM',
          },
          xhrFields: {
            withCredentials: true,
          },
        }
      );
      const res = await updateBlog;
      getAllBlogs();
      reset();
      setIsEdit(false);
      console.log(res);
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };
  console.log(photo);

  return (
    <div className='dashboard'>
      <div className='left-dashboard'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='file'
              name='photo'
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              id='photoTitle'
              value={inPhotoTitle}
              onChange={(e) => setInPhotoTitle(e.target.value)}
              placeholder='Photo Title'
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              id='category'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder='Category'
              required
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              id='mainHeading'
              value={mainHeading}
              onChange={(e) => setMainHeading(e.target.value)}
              placeholder='Main Heading'
              required
            />
          </div>
          <div className='form-control'>
            <input
              type='text'
              id='shortDescription'
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder='Short Description'
              required
            />
          </div>
          <div className='form-control'>
            <textarea
              type='text'
              id='description'
              value={paragraphDescription}
              onChange={(e) => setParagraphDescription(e.target.value)}
              placeholder='Description'
              rows='10'
              cols='30'
            ></textarea>
          </div>

          {!isEdit ? (
            <button>Add</button>
          ) : (
            <button type='button' onClick={editPost}>
              Edit
            </button>
          )}
        </form>
      </div>
      <div className='right-dashboard'>
        <div className='blog-list'>
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
  );
};

export default Dashboard;
