import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="container my-3 text-center">
        <img src={loading} alt="fucking" />
      </div>
    )
  }
}

export default Spinner