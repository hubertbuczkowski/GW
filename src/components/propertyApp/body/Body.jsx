import React from 'react';
import { connect } from 'react-redux';
import { selectProperty } from '../../../redux/actions'
import PropertyView from '../../common/propertyList/PropertyView'
import style from './Body.module.css';
import Map from '../../common/map/GoogleMap'
import { isPropertySelected } from '../helpers/Helper'

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
   const { filters, properties, selectedProperty } = state.main;
   const { propertyType, bedrooms, bathrooms } = filters;

   const filtered = properties.filter(property => isPropertySelected(property, propertyType, bathrooms, bedrooms));
   return { properties: filtered, selectedProperty };
}

const mapDispatchProps = (dispatch) => ({
   onSelectProperty: (property) => {
      dispatch(selectProperty(property));
   },
   onClose: () => {
      dispatch(selectProperty({}));
   },
})

export default connect(mapStateToProps, mapDispatchProps)(Body);
