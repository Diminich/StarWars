import {filmsApi} from "../API/api";

const FILMS = 'FILMS';

let initialState = {
    characters: [],
    created: "",
    director: "",
    edited: "",
    episode_id: '',
    planets: [],
    producer: "",
    release_date: "",
    species: [],
    starships: [],
    title: "",
    url: "",
    vehicles: []
};

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILMS:
            return {
                ...action.films
            };
        default:
            return state
    }
};

export const films = (films) => ({
    type: FILMS, films
});

export const getFilms = (titleFilms) => {
    return async (dispatch) => {
        let response = await filmsApi.getTitleFilms(titleFilms);
        dispatch(films(response.data))
    }
};

export default filmsReducer;