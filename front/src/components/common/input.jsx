import React from 'react';

const Input = ({name, label, type, onChange, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} onChange={onChange}
       className="form-control"/>
      {error && <span className="text-danger">{error}</span> }
    </div>
  );
}
 
export default Input;