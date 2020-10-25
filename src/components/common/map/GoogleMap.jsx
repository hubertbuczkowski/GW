import React from "react";
import style from './GoogleMap.module.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import logo from '../../../assets/logo2.png'

const apiKey = 'AIzaSyBfcoO_3wN0rGqLCxQkZ9V5XRMexVlwgZM'

const GoogleMap = (props) => {
   const { properties, google, onSelectMarker } = props;
   let latsum = 0;
   let lngsum = 0
   properties.forEach(property => {
      latsum += parseFloat(property.lat);
      lngsum += parseFloat(property.lon);
   })
   return (
      <div className={style.map}>
         <Map google={google}
            initialCenter={{ lat: latsum / properties.length, lng: lngsum / properties.length }}
         >
            {properties.map((property) => <Marker
               onClick={() => onSelectMarker(property)}
               title={property.address}
               name={property.address}
               position={{ lat: parseFloat(property.lat), lng: parseFloat(property.lon) }}
               icon={{
                  url: logo,
                  anchor: new google.maps.Point(5, 5),
                  scaledSize: new google.maps.Size(20, 20)
               }} />
            )}
         </Map>
      </div>
   );
}

export default GoogleApiWrapper({
   apiKey
})(GoogleMap);