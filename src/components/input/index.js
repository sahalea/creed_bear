import { Input } from 'antd';
import React from 'react';

/**
 * Custom input filed
 * This input can use any where in the application
 *
 * @param {*} name, type, css, onChange
 * @returns
 */
const CreedInput = ({
  type = 'text',
  placeholder,
  name,
  value,
  css,
  onChange,
}) => (
  <Input
    size="medium"
    name={name}
    className={css}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e)}
  />
);

export default CreedInput;
