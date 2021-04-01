import React from 'react';
import Form from './../common/Form';

class BusinessForm extends Form {
  state = {
    data: {
      business_name: ''
    },
    errors:{}
  }
  render() { 
    return (
      <form>
        {this.renderInput('business_name', '商机名称')}
        {this.renderButton('保存', 'success')}
      </form>
    );
  }
}
 
export default BusinessForm;