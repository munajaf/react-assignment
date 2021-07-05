import React from 'react';
import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";

const Map = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
    center={{ lat: props.latitude, lng: props.longitude }}
  >
    <Marker position={{ lat: props.latitude, lng: props.longitude }} />
  </GoogleMap>
)

export default Map;