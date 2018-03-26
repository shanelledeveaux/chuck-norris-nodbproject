import React from "react";
import "./FavoriteButton.css";

const FavoriteButton = props => {
  return <button className="favoritebutton" title = "Save" onClick={() => props.add()} />;
};

export default FavoriteButton;