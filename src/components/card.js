import React from "react";
import "./card.css";

const Card = props => {
  console.log(props.jogo);
  return (
    <div className="cardContainer">
      <div className="cardTitle">
        <p className="title">{props.jogo.game}</p>
      </div>
      <div className="cardBody">
        <div className="contentContainer">
          <div className="descText">{props.jogo.subdesc}</div>
          <img className="mainImage" mode="fit" src={props.jogo.imgMain} />
        </div>
      </div>
      <div className="cardFooter"></div>
    </div>
  );
};

export default Card;
