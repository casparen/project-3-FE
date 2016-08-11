import React, { Component } from 'react';
import { Link } from "react-router"


class Splash extends Component {
  render() {
    return (
      <div>
        <Link to="/home"><button>Welcome</button></Link>
      </div>
    )
  }
}

export default Splash;
