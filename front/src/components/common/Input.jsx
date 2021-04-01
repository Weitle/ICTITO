import React from 'react';

/**
 * 返回输入框 input:text
 */
const Input = ({name, label, type, error, value, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} className="form-control" value={value} id={name} onChange={onChange} />
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
}
 
export default Input;