import {filmsApi} from "../API/api";
import {Dispatch} from "redux";
import {InferActionTypes} from "./redux-store";
import {FilmsSearchType, FilmsSpecificType} from "../Types/TypeFilms";

const SEARCH_FILMS = 'SEARCH_FILMS';
const SPECIFIC_FILMS = 'SPECIFIC_FILMS';

let initialState = {
    searchResult: [] as Array<FilmsSearchType>,
    specificResult: null as FilmsSpecificType | null
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

const filmsReducer = (state:InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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

const action = {
    searchFilms: (searchFilms: Array<FilmsSearchType>) => ({
        type: SEARCH_FILMS, searchFilms
    }as const),

    specificFilms: (specificFilms: FilmsSpecificType) => ({
        type: SPECIFIC_FILMS, specificFilms
    }as const)
}

export const requestSearchFilms = (titleFilms: string) => {
    return async (dispatch: Dispatch) => {
        let {data} = await filmsApi.getSearchFilms(titleFilms);
        dispatch(action.searchFilms(data.results))
    }
};

export const requestSpecificFilms = (filmsId: number) => {
    return async (dispatch: Dispatch) => {
        let {data} = await filmsApi.getSpecificFilms(filmsId);
        dispatch(action.specificFilms(data))
    }
}

export default filmsReducer;