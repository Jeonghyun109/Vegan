import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Login extends Component {
  state = {
    information: [
      {
        id: 'jihun1989',
        password: '1608',
        email: 'jihun@kaist'
      }
    ]
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      id: '',
      password: ''
    })
  }
  

  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <input
            placeholder = "Id"
            value = {this.state.id}
            onChange = {this.handleChange}
            name = "id"
          />
        </div>
        <div>
          <input
            placeholder = "Password"
            value = {this.state.password}
            onChange = {this.handleChange}
            name= "password"
          />
        </div>
        <div>
          <button type="submit">SignIn</button>
        </div>
        <div>
          <Link to="/register">SignUp</Link>
        </div>
      </form>
    )
  }
}

export default Login;
