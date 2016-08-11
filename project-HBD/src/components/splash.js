import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import {Link} from "react-router";
// import helpers from "../utils/helpers";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            accessToken: '',

        }
    }

    responseFacebook = (response) => {
        console.log(response);
        if (response.status) {
            this.setState({status: response.status})
        } else if (response.accessToken) {
            this.setState({accessToken: response.accessToken})
        }

    };

    render() {
        if (this.state.status === "not_authorized") {
            console.log("user not authorized")
        } else if (this.state.accessToken > 0) {

        }
        return (
            <div>
                <h1>this is splash</h1>
                <Link to='/dashboard'>
                    <FacebookLogin
                        appId="1822141354680309"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="my-facebook-button-class"
                        icon="fa-facebook"
                    />
                </Link>
            </div>
        )
    }
}

export default Splash
