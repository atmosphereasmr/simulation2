import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {selectPage3, propertyImageURL} from '../../reducers/reducer'

class Wizard3 extends Component {

  constructor() {
    super()

    this.state = {
      image_url: ''
    }
  }

  eventHandlerPropertyImageURL(event) {
    this.setState({
      image_url: event
    }, () => {
      this.props.propertyImageURL(this.state.image_url)
      console.log(this.state.image_url)
    })
  }

  componentDidMount() {
    this.props.selectPage3()
  }

  render() {
    return(
      <div className="justCenter">
        <h3>Upload an image of your property.</h3>
        <div className="preview">

        <style>{`.preview{background-image: url(${this.state.image_url})`}</style>

          <h3>Preview</h3>
        </div>
        <div className="justCenter">
          <h3>Image URL</h3>
          <input onChange={(event) => this.eventHandlerPropertyImageURL(event.target.value)} className="nameInput" placeholder="Copy & paste your image URL." />
        </div>
          <div className="statusHolder">
        <div className="smallButton">
          <Link to="/wizard/2">
          <h2>Back</h2>
          </Link>
        </div>
          <div className="smallButton">
            <Link to="/wizard/4">
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

export default connect(MapStateToProps, {selectPage3, propertyImageURL})(Wizard3)
