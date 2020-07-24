import {speciesApi} from "../API/api";

const SEARCH_SPECIES = 'SEARCH_SPECIES';
const SPECIFIC_SPECIES = 'SPECIFIC_SPECIES';

let initialState = {
    searchResult: [],
    specificResult: {}
};

const speciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_SPECIES:
            return {
                ...state,
                searchResult: action.searchSpecies
            };
        case SPECIFIC_SPECIES:
            return {
                ...state,
                specificResult: action.specificSpecies
            };
        default:
            return state
    }
};

const searchSpecies = (searchSpecies) => ({
    type: SEARCH_SPECIES, searchSpecies
});

const specificSpecies = (specificSpecies) => ({
    type:SPECIFIC_SPECIES, specificSpecies
});

export const requestSearchSpecies = (speciesName) => {
    return async (dispatch) => {
        let {data} = await speciesApi.getSearchSpecies(speciesName);
        dispatch(searchSpecies(data.results))
    }
};

export const requestSpecificSpecies = (speciesId) => {
    return async (dispatch) => {
        let {data} = await  speciesApi.getSpecificSpecies(speciesId);
        dispatch(specificSpecies(data))
    }
};

export default speciesReducer;