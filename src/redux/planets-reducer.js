import {planetsApi} from "../API/api";

const PLANETS = 'PLANETS';

let initialState = {
    climate: "",
    created: "",
    diameter: "",
    edited: "",
    films: [],
    gravity: "",
    name: "",
    orbital_period: "",
    population: "",
    residents: [],
    rotation_period: "",
    surface_water: "",
    terrain: "",
    url: ""
};

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLANETS:
            return {
                ...action.planets
            };
        default:
            return state
    }
};

export const planets = (planets) => ({
    type: PLANETS, planets
});

export const getPlanets = (titlePlanets) => {
    return async (dispatch) => {
        let response = await planetsApi.getPlanetsTitle(titlePlanets);
        dispatch(planets(response.data))
    }
};

export default planetsReducer;