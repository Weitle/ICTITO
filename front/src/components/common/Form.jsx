import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  state = {
    data: {
      // 表单字段
    },
    errors: {
      // 表单字段验证错误信息
    }
  }

  handleChange = ({currentTarget:input})=>{
    const data = {...this.state.data};
    data[input.name] = input.value;
    this.setState(data);
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
   * 按钮：button
   */
  renderButton = (label, cls="primary")=>{
    return <button className={`btn btn-${cls}`}>{label}</button>;
  }
}
 
export default Form;