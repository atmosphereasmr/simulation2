import React, {Component} from 'react'

import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {desire} from '../reducers/reducer'
import House from './houseObject'
import axios from 'axios'

class DashboardNav extends Component {

  constructor() {
    super()

    this.state = {
      desired_rent: '',
      houses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/properties').then( response => {
        this.setState({houses: response.data})
      })
    }

  eventHandlerDesired(event) {
    this.setState({
      desired_rent: event
    })
    console.log(this.state)
    this.props.desire(this.state.desired_rent)
  }

  render() {
    return (
      <div className="largeContainer">
      <div className="headerBar">
        <div className="houseIcon">
         <h2>Dashboard</h2>
         <Link to="/">
         <h2>Log Out</h2>
         </Link>
        </div>
      </div>
      <div className="addNewContainer">
        <Link to='/wizard/1'>
        <div className="addNewButton">
          <h3>Add New Listing</h3>
        </div>
        </Link>
        <h4>Filter properties with desired rent greater than:</h4>
        <input onChange={(event) => this.eventHandlerDesired(event.target.value)} placeholder="Enter Desired Rent" />
        <div className="resetButtonsContainer">
          <div className="smallButton">
            <h3>Filter</h3>
          </div>
            <div className="smallButton">
              <h3>Reset</h3>
            </div>
        </div>
        <div className="thinDivider"/>
        <House />
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

export default connect(MapStateToProps, {desire})(DashboardNav)
