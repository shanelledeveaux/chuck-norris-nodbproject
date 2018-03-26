import React from "react";
import "./FavoriteButton.css";

const FavoriteButton = props => {
  return <button className="favoritebutton" onClick={() => props.add()}>
  SAVE </button>;
};

export default FavoriteButton;