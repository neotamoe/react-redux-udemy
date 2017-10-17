import React, {Component} from 'react';
import key from './map_api_key';
const MAP_API_KEY = key;

const src=`https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&callback=initMap`;

class GoogleMap extends Component {
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  // this.refs.map
  render(){
    return (
      <div>
        <script src={src}></script>
        <div ref="map" />
      </div>
    );
  }
}

export default GoogleMap;
