import React from "react";
import "./Label.css";

function Label(props) {
  return (
    <div className="label">
      <label className="label__data-value">{props.name}</label>
    </div>
  )
}

export default Label;