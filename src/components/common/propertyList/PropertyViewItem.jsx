import React from "react";
import style from './PropertyView.module.css';


const PropertyViewItem = ({ title, value, sign }) => {
   return (
      <li className={style.propertyDetail}>
         <label className={style.label}>{title}</label>
         <strong className={style.value}>{value ? `${value}${sign ? ' ' + sign : ''}` : "No information"}</strong>
      </li>
   );
}

export default PropertyViewItem;