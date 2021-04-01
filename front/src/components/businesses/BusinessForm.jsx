import React from 'react';
import Form from './../common/Form';
import Joi from 'joi-browser';

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

  render() {
    const departments = [
      {id: '0220301', name: '和平分公司'},
      {id: '0220302', name: '河东分公司'},
      {id: '0220303', name: '河西分公司'},
      {id: '0220304', name: '南开分公司'},
      {id: '0220305', name: '红桥分公司'},
      {id: '0220306', name: '河北分公司'}
    ];
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