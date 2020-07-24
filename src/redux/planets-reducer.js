import {planetsApi} from "../API/api";

const SEARCH_PLANETS = 'SEARCH_PLANETS';
const SPECIFIC_PLANETS = 'SPECIFIC_PLANETS';

let initialState = {
    searchResult: [],
    specificResult: {}
};

const planetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PLANETS:
            return {
                ...state,
                searchResult: action.searchPlanets
            };

        case SPECIFIC_PLANETS:
            return {
                ...state,
                specificResult: action.specificPlanets
            };
        default:
            return state
    }
};

const searchPlanets = (searchPlanets) => ({
    type: SEARCH_PLANETS, searchPlanets
});

const specificPlanets = (specificPlanets) => ({
    type:SPECIFIC_PLANETS, specificPlanets
});

export const requestSearchPlanets = (planetsName) => {
    return async (dispatch) => {
        let {data} = await planetsApi.getSearchPlanets(planetsName);
        dispatch(searchPlanets(data.results))
    }
};

export const requestSpecificPlanets = (planetsId) => {
    return async (dispatch) => {
        let {data} = await planetsApi.getSpecificPlanets(planetsId);
        dispatch(specificPlanets(data))
    }
};

export default planetsReducer;