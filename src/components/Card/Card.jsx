import React from "react";
import "./Card.css";
import cardImage from "../../Images/cardImage.png";
import { KeyboardArrowRight } from "@material-ui/icons";

function Card() {
  return (
    <>
      <div className="card">
        <img src={cardImage} alt="" className="card_image" />
        <h1 className="card_heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
        </h1>
        <p className="card_para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem nesciunt
          earum quos ratione, est non eligendi eum deserunt explicabo. Aliquid
          nemo nesciunt soluta sit minus!
        </p>
        <button className="card_button">
          Read <KeyboardArrowRight />{" "}
        </button>
      </div>
    </>
  );
}

export default Card;
