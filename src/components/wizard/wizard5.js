import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage5, propertyDesiredRent} from '../../reducers/reducer'
import axios from 'axios'

class Wizard5 extends Component {

  constructor() {
    super()
    this.state = {
      desired_rent: ''
    }
  }

  create() {
    axios.post('http://localhost:3001/api/properties', {
      name: this.props.name,
      description: this.props.description,
      address: this.props.address,
      city: this.props.city,
      state: this.props.state,
      zip: this.props.zip,
      image_url: this.props.image_url,
      loan_amount: this.props.loan_amount,
      monthly_amount: this.props.monthly_amount,
      desired_rent: this.state.desired_rent
    })
    .then(response => {
      console.log(response.data)
    })
  }

  eventHandlerDesiredRent(event) {
    this.setState({
      desired_rent: event
    })
    this.props.propertyDesiredRent(this.state.desired_rent)
  }

  componentDidMount() {
    this.props.selectPage5()
  }
  
  render() {
    return (
      <div>
        <div className="justCenter">
          <h3>Recommended Rent: Null</h3>
          <h3>Desired Rent</h3>
          <input onChange={(event) => this.eventHandlerDesiredRent(event.target.value)} className="nameInput" placeholder="Type in your loan amount."/>
        </div>
        <div className="statusHolder">
          <div className="smallButton">
            <Link to="/wizard/4">
            <h2>Back</h2>
            </Link>
          </div>
          <div onClick={() => this.create()} className="smallButton">
            <Link to="/dashboard/">
            <h2>Done</h2>
            </Link>
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

export default connect(MapStateToProps, {selectPage5, propertyDesiredRent})(Wizard5)
