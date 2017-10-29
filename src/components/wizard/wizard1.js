import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage1, propertyName, propertyDesc} from '../../reducers/reducer'
import axios from 'axios'

class Wizard1 extends Component {

  constructor() {
    super()

    this.state = {
      property_name: '',
      property_desc: ''
    }
  }

  eventHandlerPropertyName(event) {
    this.setState({
      property_name: event
    }, () => {
      this.props.propertyName(this.state.property_name)
      console.log(this.state.property_name)
    })
  }

  eventHandlerPropertyDesc(event) {
    this.setState({
      property_desc: event
    }, () => {
      this.props.propertyDesc(this.state.property_desc)
      console.log(this.state.property_desc)
    })
  }

componentDidMount() {
  this.props.selectPage1()
}
  render() {
    return(
      <div className="justCenter">
        <h3>Property Name</h3>
        <input onChange={(event) => this.eventHandlerPropertyName(event.target.value)} className="nameInput" placeholder="Type in the name of your property."/>
        <h3>Property Description</h3>
        <input onChange={(event) => this.eventHandlerPropertyDesc(event.target.value)} className="descInput" placeholder="Type in your property description."/>
        <div className="statusHolderPage1">
          <div className="smallButton">
            <Link to="/wizard/2">
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

export default connect(MapStateToProps, {selectPage1, propertyName, propertyDesc})(Wizard1)
