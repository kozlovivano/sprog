import React, { Component } from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 51.5101808, lng: -0.596901 }}
    >
        <Marker
            position={{ lat: 51.5101808, lng: -0.596901 }}
        />
    </GoogleMap>
));
class Gmap extends Component {
    render() {
        return (
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRUl1GmjWWWG5BKl9nY3hi6-jH98TSxcI&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: this.props.height, borderRadius: "20px", overflow: "hidden"}} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}

export default Gmap;