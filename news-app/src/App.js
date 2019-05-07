import React, {Component} from 'react';
import LoginForm from './LoginForm/LoginForm';
import NewsIndex from './NewsIndex/NewsIndex';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
      }

    
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <h1> News App</h1>
{
          this.state.loggedIn ? 
              <NewsIndex username = {this.state.username} ></NewsIndex>
              :                                                              
              <LoginForm handleLogin = {this.handleLogin} ></LoginForm>    
        }
      </header>
    </div>
  );
}
}
export default App;


