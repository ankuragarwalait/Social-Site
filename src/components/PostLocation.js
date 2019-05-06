import React, { Component } from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: props.location.lat, lng: props.location.lng }}
    >
      <Marker
        position={{ lat: props.location.lat, lng: props.location.lng }}
      />
    </GoogleMap>
  ));
  export default class PostLocation extends Component {
      constructor(props) {
          super(props);
      }
      
      render() {
          return (
            <div className="map-container">
                <MapWithAMarker location={this.props.location}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtitZBG267z9j5VmNbID8yPsrpid4dwcY&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `200px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
          );
      }
  }