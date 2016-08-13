import react from 'react';
import {Link} from 'react-router';

const IsLoggedOut = (props) => {
  return (
    <div>
      <Link to='/signup'>
          <button>SIGN UP</button>
      </Link>
      <Link to='/login'>
          <button>LOG IN</button>
      </Link>
    </div>
  )
}

export default IsLoggedOut;
