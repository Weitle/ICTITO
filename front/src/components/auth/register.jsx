import React from 'react';
import Form from 'components/common/form';

class Register extends Form {
  state = {
    data:{
      name: '',
      account: '',
      password: '',
      department: ''
    },
    errors:{}
  }

  doSubmit = ()=>{
    const {data} = this.state;
    console.log(data);
  }

  render() {
    const {name, account, password, department} = this.state.data;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-8 mx-auto">
        {this.renderInput("name", "姓名", name)}
        {this.renderInput("account", "用户帐号", account)}
        {this.renderInput("password", "密码", "password", password)}
        {this.renderInput("department", "所在单位", department)}
        {this.renderButton('注册')}
        </div>
      </form>
    );
  }
}
 
export default Register;