import React from "react";
import style from './PropertyView.module.css';


const PropertyView = ({ title, value }) => {

   return (
      <li className={style.propertyDetail}>
         <label className={style.label}>{title}</label>
         <stong className={style.value}>{value || "No information"}</stong>
      </li>
   );
}

export default PropertyView;