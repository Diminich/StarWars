import {vehiclesApi} from "../API/api";
import {VechilesSearchType, VechilesSpecificType} from "../Types/TypeVechiles";
import {InferActionTypes} from "./redux-store";
import {Dispatch} from "redux";

const SEARCH_VEHICLES = 'SEARCH_VEHICLES';
const SPECIFIC_VEHICLES = 'SPECIFIC_VEHICLES';

let initialState = {
    searchResult: [] as Array<VechilesSearchType>,
    specificResult: null as VechilesSpecificType | null
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

const vehiclesReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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

const action = {
    searchVehicles: (searchVehicles: Array<VechilesSearchType>) => ({
        type: SEARCH_VEHICLES, searchVehicles
    }as const),

    specificVehicles: (specificVehicles: VechilesSpecificType) => ({
        type: SPECIFIC_VEHICLES, specificVehicles
    }as const)
}

export const requestSearchVehicles = (vehiclesName: string) => {
    return  async (dispatch: Dispatch) => {
        let {data} = await vehiclesApi.getSearchVehicles(vehiclesName);
        dispatch(action.searchVehicles(data.results))
    }
};

export const  requestSpecificVehicles = (vehiclesId: number) => {
    return async  (dispatch: Dispatch) => {
        let {data} = await vehiclesApi.getSpecificVehicles(vehiclesId);
        dispatch(action.specificVehicles(data))
    }
}

export default vehiclesReducer