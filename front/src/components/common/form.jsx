import React, { Component } from 'react';
//import Joi from 'joi-browser';
import Input from './input';

class Form extends Component {
  state = {
    data: {},
    errors:{}
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const data = {...this.state.data};
    const errors = {};
    //const errors = {...this.state.errors};
    //this.doSubmit();
    this.schema.validate(data, {abortEarly: false}).then((value)=>{
      this.setState({errors: {}});
      this.doSubmit();
      return;
    }).catch(err=>{
      //console.log(err.inner.length);
      
      const {inner} = err;
      inner.forEach(info=>{
        errors[info.path] = info.message;
      });
      this.setState({errors});
      return false;
    });

  }

  validateProperty = async ({name, value})=>{
    const data = {[name]: value};
    return await this.schema.validateAt([name], data);
  }

  handleChange = ({currentTarget:input})=>{
    const data = {...this.state.data};
    data[input.name] = input.value;
    const errors = {...this.state.errors};
    this.validateProperty(input).catch(err=>{
      errors[input.name] = err.message;
      this.setState({data, errors});
      return;
    });

    delete errors[input.name];
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