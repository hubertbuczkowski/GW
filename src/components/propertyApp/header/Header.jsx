import React from 'react';
import { connect } from 'react-redux';
import { selectFilterProperty, selectFilterBathrooms, selectFilterBedrooms } from '../../../redux/actions';
import style from './Header.module.css';
import Dropdown from '../../common/dropdown/Dropdown';
import logo from '../../../assets/logoFull.svg';
import DonutChart from '../../common/charts/DoughnutChart';
import { isPropertySelected } from '../helpers/Helper';

const Header = (props) => {
   const {
      onChangeProperty,
      onChangeBedrooms,
      onChangeBathrooms,
      selectedPropertyType,
      selectedBedrooms,
      selectedBathrooms,
      propertyTypes,
      bedrooms,
      bathrooms,
      filteredTypes,
      filteredBaths,
      filteredBeds,
   } = props;

   const displayProperties = !selectedPropertyType || selectedPropertyType.key === "ANY";
   const displayBaths = !selectedBathrooms || selectedBathrooms.key === "ANY";
   const displayBeds = !selectedBedrooms || selectedBedrooms.key === "ANY";

   return (
      <div className={style.header}>
         <img src={logo} className={style.logo} alt="Geowox logo" />
         <div className={style.headerElement}>
            <Dropdown title="Property type" elements={propertyTypes} selectedValue={selectedPropertyType} onChange={onChangeProperty} />
            <Dropdown title="Bathrooms" elements={bathrooms} selectedValue={selectedBathrooms} onChange={onChangeBathrooms} />
            <Dropdown title="Bedrooms" elements={bedrooms} selectedValue={selectedBedrooms} onChange={onChangeBedrooms} />
         </div>
         <div className={`${style.headerElement} ${style.charts}`}>
            {displayProperties ? <DonutChart title="Properties" labels={Object.keys(filteredTypes)} data={Object.values(filteredTypes)} /> : null}
            {displayBaths ? <DonutChart title="Bathrooms" labels={Object.keys(filteredBaths)} data={Object.values(filteredBaths)} /> : null}
            {displayBeds ? <DonutChart title="Bedrooms" labels={Object.keys(filteredBeds)} data={Object.values(filteredBeds)} /> : null}
         </div>
      </div>
   );
}


const updateFilters = (object, key, value) => {
   if (!object[key]) {
      object[key] = { key, value };
   }
}

const updateAmount = (object, key) => {
   if (object[key]) {
      object[key] += 1;
   } else {
      object[key] = 1;
   }
}


const mapStateToProps = (state) => {
   const { filters, isLoading, properties } = state.main;
   const { propertyType, bedrooms, bathrooms } = filters;

   let propertyTypes = {};
   let bathroomList = {};
   let bedroomsList = {};
   let filteredTypes = {};
   let filteredBaths = {};
   let filteredBeds = {};

   properties.forEach(property => {
      const { baths, beds, propertyType } = property;
      const propertyValue = propertyType.toLowerCase().replace(/((?<=-)([a-z]))|^[a-z]/g, (letter) => letter.toUpperCase());

      const bedsNumber = isNaN(beds) || beds === "" ? "0" : beds;
      const bathsNumber = isNaN(baths) || baths === "" ? "0" : baths;

      updateFilters(propertyTypes, property.propertyType, propertyValue);
      updateFilters(bathroomList, bathsNumber, bathsNumber);
      updateFilters(bedroomsList, bedsNumber, bedsNumber);

      if (isPropertySelected(property, filters.propertyType, filters.bathrooms, filters.bedrooms)) {
         updateAmount(filteredTypes, propertyValue);
         updateAmount(filteredBaths, bathsNumber);
         updateAmount(filteredBeds, bedsNumber);
      }
   })

   const sortNumbers = (a, b) => parseInt(a.value) - parseInt(b.value);
   const sortStrings = (a, b) => a.value.localeCompare(b.value);

   propertyTypes = Object.values(propertyTypes).sort(sortStrings);
   bedroomsList = Object.values(bedroomsList).sort(sortNumbers);
   bathroomList = Object.values(bathroomList).sort(sortNumbers);

   return {
      properties,
      selectedPropertyType: propertyType,
      selectedBedrooms: bedrooms,
      selectedBathrooms: bathrooms,
      isLoading,
      propertyTypes,
      bedrooms: bedroomsList,
      bathrooms: bathroomList,
      filteredTypes,
      filteredBaths,
      filteredBeds,
   };
}

const mapDispatchProps = (dispatch) => ({
   onChangeProperty: (value) => {
      dispatch(selectFilterProperty(value));
   },
   onChangeBathrooms: (value) => {
      dispatch(selectFilterBathrooms(value));
   },
   onChangeBedrooms: (value) => {
      dispatch(selectFilterBedrooms(value));
   }
})

export default connect(mapStateToProps, mapDispatchProps)(Header);
