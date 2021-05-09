import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';

class Form extends Component {
  state = {
    data: {},
    errors:{}
  }
  schema = {}

  handleSubmit = (e)=>{
    e.preventDefault();
    this.doSubmit();
  }

  validateProperty = ({name, value})=>{
    const schema = {[name]: this.schema[name]};
    const data = {[name]: value};
    const {error}  = Joi.validate(data, schema);
    return error ? error.details[0].message : null;
    //return error ? error.message : null;
  }

  handleChange = ({currentTarget:input})=>{
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage){
      errors[input.name] = errorMessage;
    } else{
      delete errors[input.name];
    }
    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({data, errors});
  }

  renderInput = (name, label, type="text")=>{
    const {data, errors} = this.state;
    return <Input name={name} label={label} value={data[name]} type={type} onChange={this.handleChange} error={errors[name]} />
  }

  renderButton = (label, btnClass="primary")=>{
    return <button className={`btn btn-${btnClass}`}>{label}</button>
  }  
}
 
export default Form;