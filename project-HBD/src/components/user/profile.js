import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import helpers from '../../utils/helpers';

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
        console.log(this.state.response);
        return browserHistory.push('/EditProfile')
    }


    render() {
        const res = this.state.response
        console.log(res);
        // console.log(this.state.response);
        // const fbProfile = this.state.response
        // console.log("user:",user);
        // console.log("test",this.state.response);
        // console.log("profile", window.localStorage.getItem('accessToken'));

        return (
            <div className="wrapper">
                <div className="container">
                    <img role="presentation" src="https://pickaface.net/assets/images/slides/slide2.png" className="profilePic"></img>
                    <h2>{res.name}</h2>
                    <h2>{res.email}</h2>
                    <h2>{res.dob}</h2>

                    <button onClick={(event) => this.edit(event)}>Edit</button>
                </div>
            </div>

        );
    }
}


export default Profile;
