import React, {Component} from 'react';
// import firebaseUtils from
import Helpers from '../utils/helpers.js';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            response: [],
            text: "",
            currentUser: ""
        };
        Helpers.getGiphy(this.state.response).then((res) => {
            this.setState({response: res.data})
        });
        Helpers.getCurrentUser(window.localStorage.getItem("uid"))
            .then(res => {
                this.setState({currentUser: res})
            })
    }
    handleSubmit(event, img) {
        event.preventDefault();
        console.log(this.state.text);
        Helpers.getCurrentUser(this.props.params.uid).then(res => {
            const data = {
                phone: res.phone,
                sender: this.state.currentUser.name,
                receiver: res.name,
                giphyUrl: img,
                message: this.state.text,
            };
            console.info("data: ", data);
            Helpers.sendMessage(data)
                .then(res => console.log(res))
        })
    }

    onClick(event) {
        event.preventDefault();
        console.log('click');
        Helpers.getGiphy(this.state.response).then((res) => {
            this.setState({response: res.data})
        });
    }

    render() {
        const result = this.state.response;
        const img = result.fixed_height_downsampled_url;
        // console.info("params: ", this.props.params.uid);
        return (
            <div>
                <img src={img} role="representation"></img><br/>
                <textarea rows="6" cols="50" placeholder="leave your birthday message here"
                          onChange={e => this.setState({text: e.target.value})}/><br />
                <button onClick={(event) => this.onClick(event)}>Refresh</button>
                <button onClick={(event) => this.handleSubmit(event, img)}>Submit</button>
            </div>
        );
    }
}
export default Message;
