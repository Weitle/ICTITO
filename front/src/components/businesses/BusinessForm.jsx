import React from 'react';
import Joi from 'joi-browser';
import axios from 'axios';

import Form from './../common/Form';

class BusinessForm extends Form {
  state = {
    data: {
      business_name: '',
      department: ''
    },
    errors:{}
  }

  schema = {
    business_name: Joi.string().required(),
    department: Joi.string().required()
  }

  async componentDidMount(){
    const {data:departments} = await axios.get("");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput('business_name', '商机名称')}
        {this.renderSelect('department', '营销单位', 'id', 'name', departments)}
        {this.renderButton('保存', 'success')}
      </form>
    );
  }
}
 
export default BusinessForm;