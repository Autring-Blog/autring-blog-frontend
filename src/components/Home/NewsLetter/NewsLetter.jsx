import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="news_letter">
      <h1 className="news_letter_heading">Suscribe to newsletter</h1>
      <form className="news_letter_form">
        <span className="input">
          <h1>Name</h1>
          <input type="text" value={FormData.value} />
        </span>

        <span className="input">
          <h1>Gmail</h1>
          <input type="text" value={FormData.value} />
        </span>
        <button className="news_letter_form_button">Read More</button>
      </form>
    </div>
  );
}

export default NewsLetter;
