import React, { Component } from 'react';
import GetGiphy from '../utils/helpers.js';

class Message extends Component {
constructor(props){
  super();
  this.state= {
    text: "",
    response: []
  }
}

onChange(event){
  event.preventDefault()
  this.setState({ text: event.target.value });
}

onClick(event){
  event.preventDefault()
  console.log('click');
  GetGiphy.getRandom(this.state.text).then((res) => {
    this.setState({response: res.data})
  });
}

render(){
  const result = this.state.response
  const img = result.fixed_height_downsampled_url


  return (
    <div>
        <img src={img} alt="giphy"></img>
        <button onClick={(event) => this.onClick(event)}>Refresh</button>
    </div>
    );
  }
}
export default Message;
