import {peopleApi} from "../API/api";

const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
const SPECIFIC_RESULT = 'SPECIFIC_RESULT';

let initialState = {
        searchResult: [],
        specificResult: {},
    }
;

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PEOPLE:
            return {
                ...state,
                searchResult: action.searchPeople
            };

        case SPECIFIC_RESULT:
            return {
                ...state,
                specificResult: action.specificPeople
            };

        default:
            return state;
    }
    
};

const searchPeople = (searchPeople) => ({
    type: SEARCH_PEOPLE, searchPeople
});

const specificPeople = (specificPeople) => ({
    type: SPECIFIC_RESULT, specificPeople
});

export const requestSearchPeople = (peopleName) => {
    return async (dispatch) => {
        const {data} = await peopleApi.getSearchPeople(peopleName);
        dispatch(searchPeople(data.results));
    }
};

export const requestSpecificPeople = (peopleId) => {
    return async (dispatch) => {
        const {data} = await peopleApi.getSpecificPeople(peopleId);
        dispatch(specificPeople(data))
    }
};

export default peopleReducer;