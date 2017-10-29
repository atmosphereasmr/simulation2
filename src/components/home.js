import React, {Component} from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {login, password} from '../reducers/reducer'
import axios from 'axios'

class Home extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  register() {
    axios.post('http://localhost:3001/api/users', {
      username: this.state.username,
      password: this.state.password
    })
    .then(response => {
      this.setState({username: '', password: ''})
      console.log(response.data)
      window.location.reload(false);
    })
  }

  login() {
    axios.get('http://localhost:3001/api/users').then( response => {
        console.log(response.data)
      })
  }

  eventHandlerUsername(event) {
    this.setState({
      username: event
    }, () => {
      this.props.login(this.state.username)
      console.log(this.state.username)
    })
  }

  eventHandlerPass(event) {
    this.setState({
      password: event
    }, () => {
      this.props.password(this.state.password)
      console.log(this.state.password)
    })
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="houseLogo" />
        <div className="inputBoxes">
          <input id="username" onChange={(event) => this.eventHandlerUsername(event.target.value)} placeholder="Username"></input>
          <input id="password" onChange={(event) => this.eventHandlerPass(event.target.value)} placeholder="Password"></input>
        </div>
        <div className="loginButtons">
          <div className="login" onClick={() => this.login()}>
            <Link to="/dashboard/">
            <h2>Login</h2>
            </Link>
          </div>
          <div className="register" onClick={() => this.register()}>
            <h2>Register</h2>
          </div>
        </div>
      </div>
    )
  }
}

function MapStateToProps(state) {
  return(
    console.log(state),
    state
  )
}

export default connect(MapStateToProps, {login, password})(Home)
