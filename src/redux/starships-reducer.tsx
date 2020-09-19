import {starshipsApi} from "../API/api";
import {StarshipsSearchType, StarshipsSpecificType} from "../Types/TypeStarships";
import {InferActionTypes} from "./redux-store";
import {Dispatch} from "redux";

const SEARCH_STARSHIPS = 'SEARCH_STARSHIPS';
const SPECIFIC_STARSHIPS = 'SPECIFIC_STARSHIPS';

let initialState = {
    searchResult: [] as Array<StarshipsSearchType>,
    specificResult: null as StarshipsSpecificType | null
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

const starshipsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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

const action = {
    searchStarships: (searchStarships: Array<StarshipsSearchType>) => ({
        type: SEARCH_STARSHIPS, searchStarships
    }as const),

    specificStarships: (specificStarships: StarshipsSpecificType) => ({
        type: SPECIFIC_STARSHIPS, specificStarships
    }as const)
}

export const requestSearchStarships = (starshipsName: string) => {
    return async (dispatch: Dispatch) => {
        let {data} = await starshipsApi.getSearchStarships(starshipsName);
        dispatch(action.searchStarships(data.results))
    }
};

export const requestSpecificStarships = (starshipsId: number) => {
    return async (dispatch: Dispatch) => {
        let {data} = await  starshipsApi.getSpecificStarships(starshipsId);
        dispatch(action.specificStarships(data))
    }
};

export default starshipsReducer;