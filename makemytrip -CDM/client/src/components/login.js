import React, { Component } from "react";
import "../css/login.css";
import { login } from './UserFunctions'

import Signup from "./signup"
class Login extends Component {
  
  constructor(props) {
    super(props);
    {

    }
    this.state = {
      isOpen:false,
      isClose:false,
      email:'',
      password:''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  signup=()=>
  {
    console.log('hello');
    this.setState({ isOpen: true });
    this.props.onClose();
  
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name+":"+e.target.value)
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password

    }
    console.log(user)

    login(user).then(res => {
      console.log(res)
      this.props.onClose();
    })
  }
  
  render() {
    let login = (
    
      <div>
        <div class="login-page">
        
  <div class="form">
    <form class="login-form" noValidate onSubmit={this.onSubmit} action="post">
      <input type="email" placeholder="email" name="email" value={this.state.email}
                  onChange={this.onChange}/>
      <input type="password" placeholder="password" name="password" value={this.state.password}
                  onChange={this.onChange}/>
      <button type="submit">login</button>
      <p class="message">Not registered? <a href="#" onClick={this.signup}>Create an account</a></p>
      <p style={{margin:'0',marginTop:'3px'}}><a style={{color:'red',cursor:'pointer'}} onClick={this.props.onClose}>close</a></p>
    </form>
  </div>
  
</div>
<Signup
              isOpen={this.state.isOpen}
              onClose={e => this.setState({ isOpen: false })}
            />
            </div>
    );

    if (!this.props.isOpen) {
      login= null;
    }
    return <div>{login}</div>;
  }
}
export default Login;
