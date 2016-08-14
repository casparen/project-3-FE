import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import helpers from '../../utils/helpers';
import '../../styles/profile.css';
import { Button } from 'react-bootstrap';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            response: "",
            Name: '',
            Email: '',
            DOB: '',
            Number: '',
            Program: '',
            Cohort: ''
        };
        let uid = (window.localStorage.getItem("uid"))
        console.log(uid);
        helpers.getCurrentUser(uid).then((res) => {
          this.setState({response: res})
        })
    }

    edit(event) {
        console.log("click");
        event.preventDefault();
        // console.log(this.state.response);
        return browserHistory.push('/EditProfile')
    }


    render() {
        const res = this.state.response
        // console.log(res);
        // console.log(this.state.response);
        // const fbProfile = this.state.response
        // console.log("user:",user);
        // console.log("test",this.state.response);
        // console.log("profile", window.localStorage.getItem('accessToken'));

        return (
            <div className="wrapper">
                  <img role="presentation" className="profilePic" src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
                <div className="formContainer">
                  <div className="title">
                        <h5>Name:</h5>
                        <h5>Email:</h5>
                        <h5>Dob:</h5>
                        <h5>Phone:</h5>
                  </div>
                  <div className="info">
                    <h5>{res.name}</h5>
                    <h5>{res.email}</h5>
                    <h5>{res.dob}</h5>
                    <h5>{res.phone}</h5>
                  </div>
                </div>

                  <Button className="button" bsStyle="warning" bsSize="large"  onClick={(event) => this.edit(event)} block>Edit</Button>

            </div>

        );
    }
}


export default Profile;
