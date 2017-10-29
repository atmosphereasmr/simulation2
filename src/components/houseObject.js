import React, {Component} from 'react'

import {connect} from 'react-redux'
import axios from 'axios'

class House extends Component {

  constructor() {
    super()

    this.state = {
      desired_rent: '',
      houses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/properties').then( response => {
        this.setState({houses: response.data.properties})
      })
    }

    onClickHandler(id) {
      axios.delete(`http://localhost:3001/api/properties/${id}`)
      .then(response => {
        console.log(response.data.properties)
        this.setState({houses: response.data.properties})})
    }

  render() {
    return (
      <div className="houseDisplay">
        <div className="housePreview">
         <style>{'.preview{background-image: url(http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg)'}</style>
        </div>
        <div>
          {this.state.houses.map((house) => {
            return (
              <div className="houseDisplay" key={house.id}>
              <div className="housePreview">
                <style>{`{background-image: url(${house.image_url})`}</style>
              </div>
              <div>
                <p>Property Name: {house.name}</p>
                <p>Property Description: {house.description}</p>
                <p>Property Address: {house.address}</p>
                <p>Property City: {house.city}</p>
                <p>Property State: {house.state}</p>
                <p>Property ZIP: {house.zip}</p>
              </div>
              <div>
                <p>Loan Amount: {house.loan_amount}</p>
                <p>Monthly Amount: {house.monthly_amount}</p>
                <p>Desired Rent: {house.desired_rent}</p>
                <div className="deleteBox" onClick={() => this.onClickHandler(house.id)}>
                <h2>X</h2>
                </div>
              </div>
              </div>
            )
          })}
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

export default connect(MapStateToProps)(House)
