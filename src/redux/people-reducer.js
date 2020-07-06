import {peopleApi} from "../API/api";

const PEOPLE = 'PEOPLE';

let initialState = {
    name: "",
    height: "",
    mass: "",
    hair_color: "",
    skin_color: "",
    eye_color: "",
    birth_year: "",
    gender: "",
    Homeworld: "",
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: "",
    edited: "",
    url: ""
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case PEOPLE:
            return {
                ...action.people
            };
        default:
            return state;

    }
};

export const people = (people) => ({
    type: PEOPLE, people
});

export const getPeople = (peopleId) => {
    return async (dispatch) => {
        let response = await peopleApi.getNamePeople(peopleId);
        dispatch(people(response.data));
    }
};

export default peopleReducer;