import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import _ from "lodash";
import App from "./App";
import helpers from "../utils/helpers";


class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            accessToken: '',
            email: '',
            user: {}
        };
    };

    responseFacebook = (response) => {
           // console.log(response);
           if (response.status) {
               this.setState({status: response.status})
           } else if (response.accessToken) {
               window.localStorage.setItem('accessToken', response.accessToken);
               this.setState({
                   facebookUser: response,
                   email: response.email,
                   id: response.id
               });
               helpers.checkForMatch()
                   .then(res => {
                       let user = _.values(res).filter(each => each.email !== this.state.email);
                       // console.log("userinfo: ", user[0]);
                       this.setState({user: user[0]})
                       const data = {};
                       data[response.id] = {
                         name: response.name,
                         email: response.email,
                         url: response.picture.data.url,
                         token: response.accessToken,
                         id: response.id
                       }
                       helpers.addToDB(data).then((res) => {
                           console.log(res);
                       })
                   })
           }
       };


       render() {

           if (this.state.status === "not_authorized") {
               console.log("user not authorized");
           } else if (window.localStorage.getItem("accessToken")) {
               console.log("got access token!");

                 return (
                   <div>
                   <App profile={this.state.facebookUser} />
                   </div>
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

   export default Splash



{/*const data = {};
data[response.id] = {
  name: response.name,
  email: response.email,
  url: response.picture.data.url,
  token: response.accessToken,
  id: response.id
}
helpers.addToDB(data).then((res) => {
    console.log(res);
})*/}
