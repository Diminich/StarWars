import {vehiclesApi} from "../API/api";

const VEHICLES = 'VEHICLES';

let initialState = {
    cargo_capacity: "",
    consumables: "",
    cost_in_credits: "",
    created: "",
    crew: "",
    edited: "",
    length: "",
    manufacturer: "",
    max_atmosphering_speed: "",
    model: "",
    name: "",
    passengers: "",
    pilots: [],
    films: [],
    url: "",
    vehicle_class: ""
};

const vehiclesReducer = (state = initialState, action) => {
   switch (action.type) {
       case VEHICLES:
           return {
               ...action.vehicles
           };
       default:
           return state
   }
};

const vehicles = (vehicles) => ({
    type: VEHICLES, vehicles
});

export const getVehicles = (titleVehicles) => {
    return  async (dispatch) => {
        let response = await vehiclesApi.getVehiclesTitle(titleVehicles);
        dispatch(vehicles(response.data))
    }
};

export default vehiclesReducer