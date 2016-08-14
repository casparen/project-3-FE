import React, { Component } from 'react';
import './App.css';
import Searchvalue from './places.js';
import axios from 'axios';


class App extends Component {
  constructor(prop) {
    super(prop)
    this.state={map: ""}
  }
  componentDidMount() {
    SC.initialize({
      client_id: '90001a6f612b189c4119cf524ce4f22b',
      redirect_uri: 'http://localhost:3000'
    });

    SC.get('/tracks', {
      q: 'happy birthday'
    }).then(function(tracks) {
//      console.log(tracks[0].uri);
      let uri = tracks[0].uri;
      let encodedUri = encodeURI(uri);
      console.log(encodedUri);
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
      let iframe = '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url='+encodedUri+'&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
      $('#tracks').append(iframe);

    });
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
//    https://developers.soundcloud.com/docs/api/guide#authentication

    // let iframeElement   = document.querySelector('iframe');
    // let iframeElementID = iframeElement.id;
    // let widget1         = SC.Widget(iframeElement);
    // let widget2         = SC.Widget(iframeElementID);
    // // widget1 === widget2

    // initiate auth popup
    // SC.connect().then(function() {
    //   console.log("soundcloud");
    //   return SC.get('/me');
    // }).then(function(me) {
    //   alert('Hello, ' + me.username);
    // });

////// call to backend
     let serverUrl = 'http://localhost:8000'

    axios.get(serverUrl + '/sample', {
    // params: {
    //   ID: 12345
    // }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  ////// call to backend

    let context=this
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    function success(pos) {
      console.log('pos', pos);
      var map;
      var longitude = pos.coords.longitude;
        //console.log(pos.coords.longitude);
      var latitude = pos.coords.latitude;
        //console.log(pos.coords.latitude);

      map = new google.maps.Map(document.getElementById('map-here'), {
        center: {lat: latitude, lng: longitude},
        zoom: 18
      });
      context.setState({map: map}, function() {
        console.log("state", context.state);
      })
    }
    function error(err) {
      console.log('err', err);
    }
      navigator.geolocation.getCurrentPosition(success, error, options )

  }

  render() {
    return (
      <div className="App">
        <div id='map-here'> </div>
          <Searchvalue map={this.state.map}/>
          <div id='tracks'></div>

      </div>
    );
  }
}

export default App;
