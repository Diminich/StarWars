import {speciesApi} from "../API/api";
import {SpeciesSearchType, SpeciesSpecificType} from "../Types/TypeSpecies";
import {InferActionTypes} from "./redux-store";
import {Dispatch} from "redux";

const SEARCH_SPECIES = 'SEARCH_SPECIES';
const SPECIFIC_SPECIES = 'SPECIFIC_SPECIES';

let initialState = {
    searchResult: [] as Array<SpeciesSearchType>,
    specificResult: null as SpeciesSpecificType | null
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

const speciesReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEARCH_SPECIES:
            return {
                ...state,
                searchResult: action.searchSpecies
            };
        case SPECIFIC_SPECIES:
            return {
                ...state,
                specificResult: action.specificSpecies
            };
        default:
            return state
    }
};


const action = {
    searchSpecies: (searchSpecies: Array<SpeciesSearchType>) => ({
        type: SEARCH_SPECIES, searchSpecies
    }as const),

    specificSpecies: (specificSpecies: SpeciesSpecificType) => ({
        type:SPECIFIC_SPECIES, specificSpecies
    }as const)
}

export const requestSearchSpecies = (speciesName: string) => {
    return async (dispatch: Dispatch) => {
        let {data} = await speciesApi.getSearchSpecies(speciesName);
        dispatch(action.searchSpecies(data.results))
    }
};

export const requestSpecificSpecies = (speciesId: number) => {
    return async (dispatch: Dispatch) => {
        let {data} = await  speciesApi.getSpecificSpecies(speciesId);
        dispatch(action.specificSpecies(data))
    }
};

export default speciesReducer;