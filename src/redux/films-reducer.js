import {filmsApi} from "../API/api";

const SEARCH_FILMS = 'SEARCH_FILMS';
const SPECIFIC_FILMS = 'SPECIFIC_FILMS';

let initialState = {
    searchResult: [],
    specificResult: {}
};

const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FILMS:
            return {
                ...state,
                searchResult: action.searchFilms
            };

        case SPECIFIC_FILMS:
            return {
                ...state,
                specificResult: action.specificFilms
            };

        default:
            return state
    }
};

const searchFilms = (searchFilms) => ({
    type: SEARCH_FILMS, searchFilms
});

const specificFilms = (specificFilms) => ({
    type: SPECIFIC_FILMS, specificFilms
})

export const requestSearchFilms = (titleFilms) => {
    return async (dispatch) => {
        let {data} = await filmsApi.getSearchFilms(titleFilms);
        dispatch(searchFilms(data.results))
    }
};

export const requestSpecificFilms = (filmsId) => {
    return async (dispatch) => {
        let {data} = await filmsApi.getSpecificFilms(filmsId);
        dispatch(specificFilms(data))
    }
}

export default filmsReducer;