import React, { Component } from 'react';

class GooglePlaces extends Component {

  constructor(props) {
    super(props);
    this.state = {
        place: ''
    }
  }

  componentWillReceiveProps(props) {
    let context=this
    console.log('props', props);
    let input = document.getElementById('spot-input');
    let autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', props.map);

      let infowindow = new google.maps.InfoWindow();
            let marker = new google.maps.Marker({
              map: props.map,
              anchorPoint: new google.maps.Point(0, -29)
            });
            autocomplete.addListener('place_changed', function() {
                  infowindow.close();
                  marker.setVisible(false);
                  let place = autocomplete.getPlace(); //this is where google brings back the addresses.
                  if (!place.geometry) {
                    window.alert("Autocomplete's returned place contains no geometry");
                    return;
                  }
                  console.log('PLACES', place);
                  context.setState({place: place});
                  //console.log("place", place);
                  console.log(place.name);
                  console.log(place.formatted_address);
                  console.log(place.formatted_phone_number);

                  var name = place.name;
                  var address = place.formatted_address;
                  var phone = place.formatted_phone_number;

                  var id = false;
                  // $(".searchResults").remove();
                  // $("#map-results").html("");
                  // addResult(id, name, address, phone);

                  // If the place has a geometry, then present it on a map.
                  if (place.geometry.viewport) {
                    props.map.fitBounds(place.geometry.viewport);
                  } else {
                    props.map.setCenter(place.geometry.location);
                    props.map.setZoom(17);  // Why 17? Because it looks good.
                  }
                  marker.setIcon(/** @type {google.maps.Icon} */({
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(35, 35)
                  }));
                  marker.setPosition(place.geometry.location);
                  marker.setVisible(true);

                  var address = '';
                  if (place.address_components) {
                    address = [
                      (place.address_components[0] && place.address_components[0].short_name || ''),
                      (place.address_components[1] && place.address_components[1].short_name || ''),
                      (place.address_components[2] && place.address_components[2].short_name || '')
                    ].join(' ');
                  }

                  infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
                  infowindow.open(props.map, marker);
                });

  }

  render() {
    return (
      <div>
        <input id="spot-input" className="controls" type="text" placeholder="Enter a location"/>
        <div>
          <p>{this.state.place.name}</p>
          <p>{this.state.place.formatted_address}</p>
          <p>{this.state.place.formatted_phone_number}</p>
          <p>{this.state.place.website}</p>
        </div>

      </div>

    );

  }
}

export default GooglePlaces;
