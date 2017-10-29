import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage2, unselectPage2, propertyAddress, propertyCity, propertyState, propertyZip} from '../../reducers/reducer'

class Wizard2 extends Component {

  constructor() {
    super()

    this.state = {
      property_address: '',
      property_city: '',
      property_state: '',
      property_zip: ''
    }
  }

  eventHandlerPropertyAddress(event) {
    this.setState({
      property_address: event
    }, () => {
      this.props.propertyAddress(this.state.property_address)
      console.log(this.state.property_address)
    })
  }

  eventHandlerPropertyCity(event) {
    this.setState({
      property_city: event
    }, () => {
      this.props.propertyCity(this.state.property_city)
      console.log(this.state.property_city)
    })
  }

  eventHandlerPropertyState(event) {
    this.setState({
      property_state: event
    }, () => {
      this.props.propertyState(this.state.property_state)
      console.log(this.state.property_state)
    })
  }

  eventHandlerPropertyZip(event) {
    this.setState({
      property_zip: event
    }, () => {
      this.props.propertyZip(this.state.property_zip)
      console.log(this.state.property_zip)
    })
  }

  componentDidMount() {
    this.props.selectPage2()
  }

  render() {
    return(
      <div>
        <div className="justCenter">
          <h3>Address</h3>
          <input onChange={(event) => this.eventHandlerPropertyAddress(event.target.value)} className="nameInput" placeholder="Type in your address here."/>
        </div>
        <div className="dualInputs">
          <h3>City</h3>
          <h3>State</h3>
          <h3>Zip</h3>
        </div>
        <div className="dualInputs">
          <input onChange={(event) => this.eventHandlerPropertyCity(event.target.value)} placeholder="Type in your city." />
          <input onChange={(event) => this.eventHandlerPropertyState(event.target.value)} placeholder="Type in your state." />
          <input onChange={(event) => this.eventHandlerPropertyZip(event.target.value)} placeholder="Type in your zip code here."/>
        </div>
        <div className="statusHolder">
          <div className="smallButton">
            <Link to="/wizard/1">
            <h2>Back</h2>
            </Link>
          </div>
          <div className="smallButton">
            <Link to="/wizard/3">
            <h2>Next</h2>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

function MapStateToProps(state) {
  return(
    state
  )
}

export default connect(MapStateToProps, {selectPage2, propertyAddress, propertyState, propertyCity, propertyZip})(Wizard2)
