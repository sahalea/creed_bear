import { Button } from 'antd';
import React from 'react';

/**
 * Custom action button
 *
 * @param {*} type, css, onChange
 * @returns
 */
const CreedButton = ({
  type = 'primary',
  css,
  onClick,
  text,
  disabled = false,
}) => (
  <Button type={type} className={css} onClick={onClick} disabled={disabled}>
    {text}
  </Button>
);

export default CreedButton;
