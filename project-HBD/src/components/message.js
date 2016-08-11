import React, { Component } from 'react';
import GetGiphy from '../utils/helpers.js';

class Message extends Component {
constructor(props){
  super();
  this.state= {
    response: []
  }
}

onClick(event){
  event.preventDefault()
  console.log('click');
  GetGiphy.getRandom(this.state.response).then((res) => {
    this.setState({response: res.data})
  });
}

onSubmit(event){
  event.preventDefault()
  console.log('submit');
  const data = {
    img: "",
    textArea: ""
  }
  GetGiphy.submitMessage(data).then((res) => {
    console.log("send", res);
  })
}

render(){
  const result = this.state.response
  const img = result.fixed_height_downsampled_url

  return (
    <div>
        <img src={img} alt="giphy"></img><br/>
        <textarea rows="6" cols="50"></textarea><br />
        <button onClick={(event) => this.onClick(event)}>Refresh</button>
        <button onSubmit={(event) => this.onSubmit(event)}>Submit</button>
    </div>
    );
  }
}
export default Message;
