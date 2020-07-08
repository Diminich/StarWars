import {peopleApi} from "../API/api";

const PEOPLE = 'PEOPLE';

let initialState = {
        searchResult: []

    }
;

const peopleReducer = (state = initialState, action) => {

    switch (action.type) {
        case PEOPLE:
            return  {
            searchResult: action.people
        };

        default:
            return state;

    }
};

const people = (people) => ({
    type: PEOPLE, people
});

export const getPeople = (peopleName) => {
    debugger
    return async (dispatch) => {
        const {data} = await peopleApi.getNamePeople(peopleName);
        dispatch(people(data.results));
    }
};

export default peopleReducer;