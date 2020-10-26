import React from "react";
import ReactStreetview from 'react-streetview';
import style from './GoogleMap.module.css';
import { API_KEY } from '../../../assets/private';


const StreetView = (props) => {
   const streetViewPanoramaOptions = {
      position: { lat: parseFloat(props.lat), lng: parseFloat(props.lon) },
      zoom: 1,
   };

   const GenerateView = () => <ReactStreetview
      apiKey={API_KEY}
      streetViewPanoramaOptions={streetViewPanoramaOptions}
   />;

   return (
      <div className={style.streetView}>
         <GenerateView />
      </div>
   );
}

export default StreetView;