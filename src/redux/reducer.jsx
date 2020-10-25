import {
   SELECT_FILTER_VALUE_PROPERTY,
   SELECT_FILTER_VALUE_BATHROOMS,
   SELECT_FILTER_VALUE_BEDROOMS,
   LOAD_CSV_SUCCESS, SELECT_PROPERTY
} from './actions'

const initialState = {
   filters: {
      propertyType: null,
      bedrooms: null,
      bathrooms: null
   },
   properties: {},
   selectedProperty: {},
   isLoading: true,
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case SELECT_PROPERTY:
         return {
            ...state,
            selectedProperty: action.payload
         }
      case SELECT_FILTER_VALUE_PROPERTY:
         return {
            ...state,
            filters: {
               ...state.filters,
               propertyType: action.payload.value
            }
         };
      case SELECT_FILTER_VALUE_BEDROOMS:
         return {
            ...state,
            filters: {
               ...state.filters,
               bedrooms: action.payload.value
            }
         };
      case SELECT_FILTER_VALUE_BATHROOMS:
         return {
            ...state,
            filters: {
               ...state.filters,
               bathrooms: action.payload.value
            }
         };
      case LOAD_CSV_SUCCESS:
         return {
            ...state,
            properties: action.payload,
            isLoading: false,
         }
      default:
         return state;
   }
}

export default reducer;