import React, {Component} from 'react';
import Helpers from '../utils/helpers.js';
import {Image, Button} from 'react-bootstrap';

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
    };

    handleSubmit(event, imgUrl) {
        event.preventDefault();
        console.log(this.state.text);
        Helpers.getCurrentUser(this.props.params.uid).then(res => {
            const data = {
                phone: res.phone,
                sender: this.state.currentUser.name,
                receiver: res.name,
                giphyUrl: imgUrl,
                message: this.state.text,
            };
            console.info("data: ", data);
            Helpers.sendMessage(data)
                .then(res => console.log(res))
        })
    };

    onClick(event) {
        event.preventDefault();
        console.log('click');
        Helpers.getGiphy(this.state.response).then((res) => {
            this.setState({response: res.data})
        });
    };

    render() {
        const imgUrl = this.state.response.fixed_height_downsampled_url;
        // console.info("params: ", this.props.params.uid);
        return (
            <div className="message">
                <form onSubmit={e => this.handleSubmit(e, imgUrl)}>
                    <Image className="giphy" src={imgUrl} responsive thumbnail/><br/>
                <textarea rows="6" cols="100" placeholder="leave your birthday message here"
                          onChange={e => this.setState({text: e.target.value})}/><br />
                    <Button bsStyle="primary" onClick={e => this.onClick(e)}>Refresh</Button>
                    <Button type="submit" bsStyle="success">Submit</Button>
                </form>
            </div>
        );
    };
}
export default Message;
