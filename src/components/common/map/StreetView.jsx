import React from "react";
import ReactStreetview from 'react-streetview';
import style from './GoogleMap.module.css'

const apiKey = 'AIzaSyBfcoO_3wN0rGqLCxQkZ9V5XRMexVlwgZM'

const GoogleMap = (props) => {
   const googleMapsApiKey = 'AIzaSyBfcoO_3wN0rGqLCxQkZ9V5XRMexVlwgZM';

   const streetViewPanoramaOptions = {
      position: { lat: parseFloat(props.lat), lng: parseFloat(props.lon) },
      zoom: 1
   };

   const GenerateView = () => <ReactStreetview
      apiKey={googleMapsApiKey}
      streetViewPanoramaOptions={streetViewPanoramaOptions}
   />

   return (
      <div className={style.streetView}>
         <GenerateView />
      </div>
   );
}

export default GoogleMap;