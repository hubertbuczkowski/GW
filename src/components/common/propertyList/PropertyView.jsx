import React from "react";
import style from './PropertyView.module.css';
import StreetView from '../map/StreetView';
import ListItem from './PropertyViewItem';


const PropertyView = ({ selectedValue, onClose }) => {

   const { address, sqm, price, propertyType, baths, beds, lat, lon } = selectedValue;

   const sqmPrice = price && sqm ? Math.round(((parseFloat(price) / parseFloat(sqm)) + Number.EPSILON) * 100) / 100 : "Not enogh data to calculate";

   return (
      <div className={style.container}>
         <StreetView lat={lat} lon={lon} />
         <ul className={style.list}>
            <ListItem title="Address" value={address} />
            <ListItem title="Property type" value={propertyType.toLowerCase().replace(/((?<=-)([a-z]))|^[a-z]/g, (letter) => letter.toUpperCase())} />
            <ListItem title="Latitude" value={lat} />
            <ListItem title="Longtitude" value={lon} />
            <ListItem title="Area" value={sqm} />
            <ListItem title="Price" value={price} />
            <ListItem title="Euro/m2" value={sqmPrice} />
            <ListItem title="Bedrooms" value={beds} />
            <ListItem title="Bathrooms" value={baths} />
         </ul>
         <div className={style.closeButton} onClick={onClose}>
            Close
            </div>
      </div >
   );
}

export default PropertyView;