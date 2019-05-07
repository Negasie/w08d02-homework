import React, { Component } from 'react';



class LoginForm extends Component{
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
}
    handleChange = (e) =>{
    console.log("Changing input");
    console.log(e.target.value);
    this.setState({
        [e.target.name]: e.target.value,
    })
    
  }
    update = (e) =>{
      e.preventDefault();
      console.log("submit");
      console.log(this.state);
      this.props.handleLogin(this.state);
    }



  render(){
    return <div>
              <form onSubmit= {this.update}>
                username: <input onChange= {this.handleChange} type="text" name="username"/><br></br>
                password: <input onChange= {this.handleChange} type="password" name="password"/><br></br>
                <input type="submit"/>


              </form>
            </div>
  }
}

export default LoginForm;