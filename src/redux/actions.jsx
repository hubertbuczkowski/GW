import houses from '../assets/sample_data.csv'

export const SELECT_FILTER_VALUE_PROPERTY = 'SELECT_FILTER_VALUE_PROPERTY';
export const SELECT_FILTER_VALUE_BATHROOMS = 'SELECT_FILTER_VALUE_BATHROOMS';
export const SELECT_FILTER_VALUE_BEDROOMS = 'SELECT_FILTER_VALUE_BEDROOMS';
export const SELECT_PROPERTY = 'SELECT_PROPERTY'

export const LOAD_CSV_START = 'LOAD_CSV_START'
export const LOAD_CSV_SUCCESS = 'LOAD_CSV_SUCCESS'
export const LOAD_CSV_ERROR = 'LOAD_CSV_ERROR'

const toCamelcase = (str: string) => {
   return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/\r/g, '');
}

export const loadPropertiesCsv = () => dispatch => {
   dispatch({ type: LOAD_CSV_START });

   function convertCSVToJSON(str, delimiter = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/g) {
      const rows = str.replace(/\r/g, '').split('\n');
      const header = rows.splice(0, 1)[0].split(delimiter).map(toCamelcase);

      const data = rows.splice(1)
      const returnData = {};

      const arrayToObject = (element, index) => {
         returnData[header[index]] = element
      }

      return data.map((row) => {
         const modifiedRow = row.split(delimiter)
         modifiedRow.forEach(arrayToObject);
         return { ...returnData };
      });
   };

   fetch(houses).then(data => data.text()).then(data => {
      const payload = convertCSVToJSON(data);
      setTimeout(() => dispatch({ type: LOAD_CSV_SUCCESS, payload }), 3000);
   }).catch(error => dispatch({ type: LOAD_CSV_ERROR }));
}

export const selectProperty = (value) => (dispatch) => {
   return dispatch({
      type: SELECT_PROPERTY,
      payload: value,
   })
}


export const selectFilterProperty = (value) => (dispatch) => {
   return dispatch({
      type: SELECT_FILTER_VALUE_PROPERTY,
      payload: { value }
   })
}

export const selectFilterBathrooms = (value) => (dispatch) => {
   return dispatch({
      type: SELECT_FILTER_VALUE_BATHROOMS,
      payload: { value }
   })
}

export const selectFilterBedrooms = (value) => (dispatch) => {
   return dispatch({
      type: SELECT_FILTER_VALUE_BEDROOMS,
      payload: { value }
   })
}