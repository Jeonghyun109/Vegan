import React, { Component } from 'react';


class Register extends Component {
  state = {
    id: '',
    password: '',
    email: ''
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
      password: '',
      email: ''
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
          <input
            placeholder = "Email"
            value = {this.state.email}
            onChange = {this.handleChange}
            name= "email"
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>

      </form>
    )
  }
}

export default Register;
