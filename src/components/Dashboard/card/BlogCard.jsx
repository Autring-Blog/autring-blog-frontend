import React from "react";

import "./BlogCard.css";
const BlogCard = ({ data, deletePost, editPost }) => {
  const { _id, category, mainHeading, photo, shortDescription, inPhotoTitle } =
    data;
  return (
    <div className="blog-card">
      <div className="image-wrapper">
        <img
          src={
            photo
              ? photo
              : "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?size=626&ext=jpg"
          }
          alt={category}
        />
        {inPhotoTitle && (
          <p className="photo-title limit-text">{inPhotoTitle}</p>
        )}
      </div>
      <div className="blog-content">
        <div className="category">{category}</div>
        <div className="card-icons">
          <span className="delete-icon" onClick={() => deletePost(_id)}>
            <i className="bi bi-trash3-fill"></i>
          </span>
          <span className="edit-icon" onClick={() => editPost(_id)}>
            <i className="bi bi-pencil-square"></i>
          </span>
        </div>
        <div className="main-heading limit-text">{mainHeading}</div>
        <div className="short-description">
          {shortDescription.substring(0, 100)}...
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
