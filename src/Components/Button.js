import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ onClick, value }) => {
  return (
    <div className="button__content">
      <button onClick={onClick} className="button">{value}</button>
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default Button;