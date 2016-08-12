import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import _ from "lodash";
import App from "./App";
import helpers from "../utils/helpers";
// import Form from './form.js'
import {browserHistory} from 'react-router'

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fbObject: '',
            fbStatus: '',
            fbEmail: '',
            accessToken: '',
            email: '',
            user: {},
            matchStatus: ""
        };
    };

    responseFacebook = (response) => {
        //  console.log(response);
        if (response.accessToken.length > 0) {
            this.setState({
                fbStatus: 'true',
                fbEmail: response.email,
                fbObject: response
            });
            console.log("fbStataus:", this.state.fbStatus);
            console.log("sent data to db");
        }

        if (this.state.fbStatus === 'true') {
            helpers.checkForMatch().then(res => {
                let user = _.values(res).filter(each => each.email === this.state.fbEmail);
                // console.log("userinfo: ", user[0]);
                console.log("user;", user, user.length);
                // console.log("no matching data");
                if (user.length <= 0) {
                    this.setState({
                        user: user[0],
                        matchStatus: "false"
                    })
                }
                else if (user.length >= 0) {
                    this.setState({
                        user: user[0],
                        matchStatus: "true"
                    })
                }


            })
        }
    }


    render() {
        if (this.state.fbStatus === 'true' && this.state.matchStatus === 'false') {
            console.log("go to form");
            // const res = this.state.fbObject;
            return browserHistory.push('/form')
        }
        else if (this.state.fbStatus === 'true' && this.state.matchStatus === 'true') {
            return (
                <App fbObject={this.state.fbObject}/>
            )
        }
        return (
            <div>
                <h1>this is splash</h1>
                <FacebookLogin
                    appId="1822141354680309"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                />
            </div>
        )
    }
}

export default Splash;


// {/*const data = {};
//  data[response.id] = {
//  name: response.name,
//  email: response.email,
//  url: response.picture.data.url,
//  token: response.accessToken,
//  id: response.id
//  }
//  helpers.addToDB(data).then((res) => {
//  console.log(res);
//  })*/
// }


// import React, {Component} from 'react';
// import FacebookLogin from 'react-facebook-login';
// import _ from "lodash";
// import App from "./App";
// import helpers from "../utils/helpers";
// import Form from './form.js'
//
// class Splash extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fbStatus: '',
//             fbEmail: '',
//             accessToken: '',
//             email: '',
//             user: {},
//             matchStatus: ""
//         };
//     };
//
//     responseFacebook = (response) => {
//           //  console.log(response);
//            if (response.accessToken.length > 0) {
//                this.setState({fbStatus: 'true',
//                               fbEmail: response.email
//                })
//
//                console.log(this.state.fbStatus);
//                console.log("sent data to db");
//            }
//           //  else if (response.accessToken) {
//           //      window.localStorage.setItem('accessToken', response.accessToken);
//           //      this.setState({
//           //          facebookUser: response,
//           //          email: response.email,
//           //          id: response.id
//           //      });
//             else if (response.fbStatus === 'true'){
//               helpers.checkForMatch().then(res => {
//                       let user = _.values(res).filter(each => each.email !== this.state.fbEmail);
//                       // console.log("userinfo: ", user[0]);
//                       console.log(user);
//                       console.log("no matching data");
//
//                       this.setState({user: user[0],
//                                    matchStatus: "false"
//                                })
//                      //  const data = {};
//                      //  data[response.id] = {
//                      //    name: response.name,
//                      //    email: response.email,
//                      //    url: response.picture.data.url,
//                      //    token: response.accessToken,
//                      //    id: response.id
//                      //  }
//                      //  helpers.addToDB(data).then((res) => {
//                      //      console.log(res);
//                      //  })
//                    })
//             }
//           }
//
//
//
//        }
//
//
//        render() {
//
//            if (this.state.status === "not_authorized") {
//                console.log("user not authorized");
//            } else if (window.localStorage.getItem("accessToken") && this.state.matchStatus === 'false') {
//                console.log("got access token!");
//
//              return (
//                    <div>
//                    <Form />
//                    </div>
//                  )
//            }
//           //  else if (window.localStorage.getItem("accessToken") && )
//
//            return (
//                <div>
//                    <h1>this is splash</h1>
//                      <FacebookLogin
//                          appId="1822141354680309"
//                          autoLoad={true}
//                          fields="name,email,picture"
//                          callback={this.responseFacebook}
//                          cssClass="my-facebook-button-class"
//                          icon="fa-facebook"
//                      />
//
//                </div>
//            )
//        }
//    }
//
//    export default Splash
//
//
//
// {/*const data = {};
// data[response.id] = {
//   name: response.name,
//   email: response.email,
//   url: response.picture.data.url,
//   token: response.accessToken,
//   id: response.id
// }
// helpers.addToDB(data).then((res) => {
//     console.log(res);
// })*/}
