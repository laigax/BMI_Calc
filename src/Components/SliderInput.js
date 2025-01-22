import React from "react";
import "./SliderInput.css";
import PropTypes from "prop-types";

const Slider_Input = ({ value, onChange, min = 50, max = 200 }) => {
  return (
    <div className="slider">
      <input
        className="slider__input-range"
        onChange={onChange}
        value={value}
        min={min}
        max={max}
        type="range"
      />
    </div>
  );
};

Slider_Input.propTypes = {
  value: PropTypes.number.isRequired, // The current value
  onChange: PropTypes.func.isRequired, // Function to handle changes
  min: PropTypes.number, // Minimum range value
  max: PropTypes.number, // Maximum range value
};

export default Slider_Input;
