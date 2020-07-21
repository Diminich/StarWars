import {peopleApi} from "../API/api";

const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
const SPECIFIC_RESULT = 'SPECIFIC_RESULT';

let initialState = {
        searchResult: [],
        specificResult: []
    }
;

const peopleReducer = (state = initialState, action) => {
    console.log('action', action)
    switch (action.type) {
        case SEARCH_PEOPLE:
            return {
                searchResult: action.searchPeople
            };

        default:
            return state;

        case SPECIFIC_RESULT:
            return {
                specificResult: action.specificPeople
            }
    }
    
};

const searchPeople = (searchPeople) => ({
    type: SEARCH_PEOPLE, searchPeople
});

const specificPeople = (specificPeople) => ({
    type: SPECIFIC_RESULT, specificPeople
});

export const getSearchPeople = (peopleName) => {
    return async (dispatch) => {
        const {data} = await peopleApi.getPeople(peopleName);
        dispatch(searchPeople(data.results));
    }
};

export const getSpecificPeople = (peopleId) => {
    return async (dispatch) => {
        const {data} = await peopleApi.getSpecificPeople(peopleId);
        dispatch(specificPeople(data.results))
    }
};

export default peopleReducer;