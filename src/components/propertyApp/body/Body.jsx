import React from 'react';
import { connect } from 'react-redux';
import { selectFilterProperty, selectFilterBathrooms, selectFilterBedrooms, selectProperty } from '../../../redux/actions'
import PropertyView from '../../common/propertyList/PropertyView'
import style from './Body.module.css';
import Map from '../../common/map/GoogleMap'

const Body = (props) => {
   const { properties, onSelectProperty, selectedProperty, onClose } = props;

   const isSelected = Object.keys(selectedProperty).length > 0;

   return (
      <div className={style.body}>
         {isSelected ? <PropertyView selectedValue={selectedProperty} onClose={onClose} /> : null}
         <div className={`${isSelected ? style.selected : null} ${style.mapContainer}`}>
            <Map properties={properties} onSelectMarker={onSelectProperty} />
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {

   const { filters, properties, selectedProperty } = state.mainReducer;
   const { propertyType, bedrooms, bathrooms } = filters;

   const filtered = properties.filter(property => {
      const isSamePropertyType = propertyType === null || propertyType.key === "ANY" ? true : property.propertyType === propertyType.key
      const isSameBathsNumber = bathrooms === null || bathrooms.key === "ANY" ? true : (property.baths || "0") === bathrooms.key
      const isSameBedsNumber = bedrooms === null || bedrooms.key === "ANY" ? true : (property.beds || "0") === bedrooms.key

      return isSameBathsNumber && isSamePropertyType && isSameBedsNumber
   })

   return { properties: filtered, selectedProperty };
}

const mapDispatchProps = (dispatch) => ({
   onSelectProperty: (property) => {
      dispatch(selectProperty(property));
   },
   onClose: () => {
      dispatch(selectProperty({}));
   }
})

export default connect(mapStateToProps, mapDispatchProps)(Body);
