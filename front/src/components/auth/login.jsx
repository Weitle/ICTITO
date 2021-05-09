import React from 'react';
import Joi from 'joi-browser';
import Form from 'components/common/form';

class Login extends Form {
  state = {
    data:{
      account: '',
      password: '',
    },
    errors:{}
  }
  schema = {
    account: Joi.string().required(),
    password: Joi.string().min(6)
  };

  doSubmit = ()=>{
    const {data} = this.state;
    console.log(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col-8 mx-auto">
        {this.renderInput("account", "用户帐号")}
        {this.renderInput("password", "密码", "password")}
        {this.renderButton('登录')}
        </div>
      </form>
    );
  }
}
 
export default Login;