import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  state = {
    data: {
      // 表单字段
    },
    errors: {
      // 表单字段验证错误信息
    }
  }

  schema = {};

  /**
   *  onChange 事件响应方法
   * @param {currentTarget:input} input 
   */
  handleChange = ({currentTarget:input})=>{
    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState({data});
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.validate();
    console.log(this.state.data);
  }

  validate = ()=>{
    const result = Joi.validate(this.state.data, this.schema);
    console.log(result);
  }

  /**
   * 输入框 input
   */
  renderInput = (name, label, type="text")=>{
    const {data, errors} = this.state;
    return <Input 
            name={name} 
            label={label} 
            type={type} 
            error={errors[name]}
            value={data[name]}
            onChange={this.handleChange} />;
  }

  /**
   * 
   * @param {string} name
   * @param {string} label 
   * @param {array} options 
   */
  renderSelect = (name, label, keyProp, valueProp, options=[])=>{
    const {data, errors} = this.state;
    return <Select name={name} label={label} error={errors[name]} value={data[name]} options={options} keyProp={keyProp} valueProp={valueProp}  onChange={this.handleChange} />;
  }

  /**
   * 按钮：button
   */
  renderButton = (label, cls="primary")=>{
    return <button className={`btn btn-${cls}`}>{label}</button>;
  }
}
 
export default Form;