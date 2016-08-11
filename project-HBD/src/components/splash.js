import React, { Component } from 'react';
import { Link } from "react-router";


class Splash extends Component {
  render() {
    return (
      <div>
        <h1>this is splash</h1>
        <Link to='/app'><button>link to app</button></Link>
      </div>
    )
  }
}

export default Splash
