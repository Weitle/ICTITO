import React from 'react';

const Select = ({name, label, value, options, keyProp, valueProp, error, onChange}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} className="form-control" value={value} onChange={onChange}>
        <option value=""></option>
        {
          options.map(option=><option key={option[keyProp]} value={option[keyProp]}>{option[valueProp]}</option>)
        }
      </select>
      {error && <small className="form-text text-danger">{error}</small>}
    </div>
  );
}

Select.defaultProps = {
  keyProp: '_id',
  valueProp: 'value'
}
 
export default Select;