import React from "react";

/**
 * Custom action button
 *
 * @param {*} type, css, onChange
 * @returns
 */
const CreedButton = ({ type = "primary", css, onClick, text, disabled }) => (
  <button type={type} className={css} onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default CreedButton;
