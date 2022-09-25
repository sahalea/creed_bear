import React from "react";

/**
 * Custom input filed
 * This input can use any where in the application
 *
 * @param {*} name, type, css, onChange
 * @returns
 */
const CreedInput = ({ type = "text", name, value, css, onChange }) => (
  <input
    type={type}
    name={name}
    className={css}
    value={value}
    onChange={(e) => onChange(e)}
  />
);

export default CreedInput;
