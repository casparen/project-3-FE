import React, { Component } from 'react';
import Helpers from '../utils/helpers.js';

class Message extends Component {
constructor(props){
  super();
  this.state= {
    response: [],
    text: ""
  };
}


newMessage(event) {
  this.setState({text: event.target.value})
}

handleSubmit(event) {
  event.preventDefault()
  console.log(this.state.text);
  // Helpers.newPost(this.state)
  // .then((res) => {
  //   this.setState({
  //     response:res.data
  //   });
  //     console.log(res.data);
  // })
  }

onClick(event){
  event.preventDefault()
  console.log('click');
  Helpers.getRandom(this.state.response).then((res) => {
    this.setState({response: res.data})
    });
  }

render(){
  const result = this.state.response
  const img = result.fixed_height_downsampled_url

  return (
    <div>
        <img src={img} alt="giphy"></img><br/>
        <textarea rows="6" cols="50" placeholder="leave your birthday message here" onChange={e => this.setState({text: e.target.value})} /><br />
        <button onClick={(event) => this.onClick(event)}>Refresh</button>
        <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
    </div>
    );
  }
}
export default Message;
