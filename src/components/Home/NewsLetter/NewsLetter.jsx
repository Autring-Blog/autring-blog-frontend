import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const handleSubscribe = () => {
    console.log(name, email);
  }
  return (
    <div className="news_letter">
      <h1 className="news_letter_heading">Subscribe to newsletter</h1>
      <div className="news_letter_form">
        <span className="input">
          <h1>Name</h1>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </span>

        <span className="input">
          <h1>Gmail</h1>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </span>
        <button className="news_letter_form_button" onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
