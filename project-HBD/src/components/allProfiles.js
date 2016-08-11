import React, { Component } from 'react'
import { Link } from 'react-router'

class AllProfiles extends Component {
  render() {
    return (
      <div>
          <h1>View all profiles</h1>
          <Link to='/message'><button>Link to message</button></Link>
      </div>


    )
  }
}



export default AllProfiles
