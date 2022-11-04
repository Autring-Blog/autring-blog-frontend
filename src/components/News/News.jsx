import React from "react";
import "./News.css";
import Card from "../Card/Card";

function News() {
  return (
    <div className="news">
      <h1 className="news_main_heading">Latest News</h1>
      <div className="news_container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default News;
