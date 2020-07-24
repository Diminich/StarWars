import {starshipsApi} from "../API/api";

const SEARCH_STARSHIPS = 'SEARCH_STARSHIPS';
const SPECIFIC_STARSHIPS = 'SPECIFIC_STARSHIPS';

let initialState = {
    searchResult: [],
    specificResult: {}
};

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_STARSHIPS:
            return {
                ...state,
                searchResult: action.searchStarships
            };

        case SPECIFIC_STARSHIPS:
            return {
                ...state,
                specificResult: action.specificStarships
            };
        default:
            return state
    }
};

const searchStarships = (searchStarships) => ({
  type: SEARCH_STARSHIPS, searchStarships
});

const specificStarships = (specificStarships) => ({
    type: SPECIFIC_STARSHIPS, specificStarships
});

export const requestSearchStarships = (starshipsName) => {
    return async (dispatch) => {
        let {data} = await starshipsApi.getSearchStarships(starshipsName);
        dispatch(searchStarships(data.results))
    }
};

export const requestSpecificStarships = (starshipsId) => {
    return async (dispatch) => {
        let {data} = await  starshipsApi.getSpecificStarships(starshipsId);
        dispatch(specificStarships(data))
    }
};

export default starshipsReducer;