import React, { Component } from "react";
import "../css/signup.css";
import { register } from './UserFunctions'
class Signup extends Component {
  
  constructor(props) {
    super(props);
    {

    }
    this.state = {
       email:'',
       password:'',
       name:''
    
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target.name+":"+e.target.value)
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      name:this.state.name,
      email: this.state.email,
      password: this.state.password

    }
    console.log(user)

    register(user).then(res => {
      console.log(res)
      if (res) {
      
        this.props.history.push(`/`)
        

      }
    })
  }
  
  render() {
    let signup = (
    
      
        <div class="login-page1">
        
  <div class="form1">
  
    <form class="register-form1" noValidate onSubmit={this.onSubmit} action="post">
      <input type="text" placeholder="name"  name="name" value={this.state.name}
                  onChange={this.onChange}/>
<input type="email" placeholder="email address"  name="email" value={this.state.email}
                  onChange={this.onChange}/>
      <input type="password" placeholder="password"   name="password" value={this.state.password}
                  onChange={this.onChange}/>
     
      <button  type="submit" >create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
      <p style={{margin:'0',marginTop:'3px'}}><a style={{color:'red',cursor:'pointer'}} onClick={this.props.onClose}>close</a></p>
    </form>
  </div>
</div>
    );

    if (!this.props.isOpen) {
      signup= null;
    }
    return <div>{signup}</div>;
  }
}
export default Signup;
