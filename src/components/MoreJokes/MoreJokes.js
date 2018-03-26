import React from "react";
import "./MoreJokes.css";

const MoreJokes = props => {
  return <button onClick={props.randomJoke} className = "new-joke-button" >
  MORE FUNNY
</button>
};

export default MoreJokes;