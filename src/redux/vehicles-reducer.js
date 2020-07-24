import {vehiclesApi} from "../API/api";

const SEARCH_VEHICLES = 'SEARCH_VEHICLES';
const SPECIFIC_VEHICLES = 'SPECIFIC_VEHICLES';

let initialState = {
    searchResult: [],
    specificResult: {}
};

const vehiclesReducer = (state = initialState, action) => {
   switch (action.type) {
       case SEARCH_VEHICLES:
           return {
               ...state,
               searchResult: action.searchVehicles
           };
       case SPECIFIC_VEHICLES:
           return {
               ...state,
               specificResult: action.specificVehicles
           };

       default:
           return state
   }
};

const searchVehicles = (searchVehicles) => ({
    type: SEARCH_VEHICLES, searchVehicles
});

const specificVehicles = (specificVehicles) => ({
    type: SPECIFIC_VEHICLES, specificVehicles
});

export const requestSearchVehicles = (vehiclesName) => {
    return  async (dispatch) => {
        let {data} = await vehiclesApi.getSearchVehicles(vehiclesName);
        dispatch(searchVehicles(data.results))
    }
};

export const  requestSpecificVehicles = (vehiclesId) => {
    return async  (dispatch) => {
        let {data} = await vehiclesApi.getSpecificVehicles(vehiclesId);
        dispatch(specificVehicles(data))
    }
}

export default vehiclesReducer