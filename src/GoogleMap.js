import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 12.971599,
              lng: 77.594566
            }
          }
        />
      );
    }
}
  
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCQVLyu4nE_8xEdZZWwlL4w7ypDqnsPwZc'
})(MapContainer);