import React from 'react';
//import Joi from 'joi-browser';
import * as yup from 'yup';
import axios from 'axios';
import Form from 'components/common/form';

class Login extends Form {
  state = {
    data:{
      account: '',
      password: '',
    },
    errors:{}
  }
  schema = yup.object().shape({
    account: yup.string().required("用户帐号不能为空。"),
    password: yup.string().min(6, "密码长度不能小于6位。").required("密码不能为空。")
  });
  
  doSubmit = ()=>{
    const {data} = this.state;
    axios.post("http://localhost:4021/api/auth/login", data).then(res=>{
      console.log(res);
    })
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