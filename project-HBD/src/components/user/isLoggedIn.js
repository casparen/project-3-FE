import React from 'react';
import {Link} from 'react-router';
import {NavDropdown, MenuItem} from 'react-bootstrap';

const IsLoggedIn = (props) => {
  return (
    <div>
      <NavDropdown eventKey={1} title="USERNAME" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>
              <Link to='/profile'>
                  <button>Your profile</button>
              </Link>
          </MenuItem>
          <MenuItem eventKey={3.2}>
              <button onClick={e => this.handleClick()}>LOG OUT</button>
          </MenuItem>
      </NavDropdown>
    </div>
  )
}

export default IsLoggedIn;
