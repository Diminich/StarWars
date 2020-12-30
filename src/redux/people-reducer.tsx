import {peopleApi} from "../API/api";
import {Dispatch} from "redux";
import {InferActionTypes} from "./redux-store";
import {PeopleSearchType, PeopleSpecificType} from "../Types/TypePeople";

const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
const SPECIFIC_RESULT = 'SPECIFIC_RESULT';

let initialState = {
    searchResult: [] as Array<PeopleSearchType>,
    specificResult: null as PeopleSpecificType | null
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

const peopleReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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

const action = {
    searchPeople: (searchPeople: Array<PeopleSearchType>) => ({
        type: SEARCH_PEOPLE,
        searchPeople
    } as const),

    specificPeople: (specificPeople: PeopleSpecificType) => ({
        type: SPECIFIC_RESULT, specificPeople
    } as const)
}

export const requestSearchPeople = (peopleName: string) => {
    return async (dispatch: Dispatch) => {
        const {data} = await peopleApi.getSearchPeople(peopleName);
        dispatch(action.searchPeople(data.results));
    }
};

export const requestSpecificPeople = (peopleId: number) => {
    return async (dispatch: Dispatch) => {
        const {data} = await peopleApi.getSpecificPeople(peopleId);
        dispatch(action.specificPeople(data))
    }
};

export default peopleReducer;