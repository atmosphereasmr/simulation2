import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage4, propertyLoanAmount, propertyMonthlyAmount} from '../../reducers/reducer'

class Wizard4 extends Component {

  constructor() {
    super()

    this.state = {
      loan_amount: '',
      monthly_amount: ''
    }
  }

  eventHandlerLoanAmount(event) {
    this.setState({
      loan_amount: event
    }, () => {
      this.props.propertyLoanAmount(this.state.loan_amount)
      console.log(this.state.loan_amount)
    })
  }

  eventHandlerMonthlyAmount(event) {
    this.setState({
      monthly_amount: event
    }, () => {
      this.props.propertyMonthlyAmount(this.state.monthly_amount)
      console.log(this.state.monthly_amount)
    })
  }

  componentDidMount() {
    this.props.selectPage4()
  }

  render() {
    return(
      <div>
        <div className="justCenter">
          <h3>Loan Amount</h3>
          <input onChange={(event) => this.eventHandlerLoanAmount(event.target.value)} className="nameInput" placeholder="Type in your loan amount."/>
          <h3>Monthly Mortgage</h3>
          <input onChange={(event) => this.eventHandlerMonthlyAmount(event.target.value)} className="nameInput" placeholder="Type in your monthly mortgage."/>
        </div>
        <div className="statusHolder">
          <div className="smallButton">
            <Link to="/wizard/3">
            <h2>Back</h2>
            </Link>
          </div>
          <div className="smallButton">
            <Link to="/wizard/5">
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

export default connect(MapStateToProps, {selectPage4, propertyLoanAmount, propertyMonthlyAmount})(Wizard4)
