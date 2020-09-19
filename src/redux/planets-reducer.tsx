import {planetsApi} from "../API/api";
import {Dispatch} from "redux";
import {InferActionTypes} from "./redux-store";
import {PlanetsSearchType, PlanetsSpecificType} from "../Types/TypePlanet";

const SEARCH_PLANETS = 'SEARCH_PLANETS';
const SPECIFIC_PLANETS = 'SPECIFIC_PLANETS';

let initialState = {
    searchResult: [] as Array<PlanetsSearchType>,
    specificResult: null as PlanetsSpecificType | null
};

type InitialStateType = typeof initialState
type ActionTypes = InferActionTypes<typeof action>;

const planetsReducer = (state:InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEARCH_PLANETS:
            return {
                ...state,
                searchResult: action.searchPlanets
            };

        case SPECIFIC_PLANETS:
            return {
                ...state,
                specificResult: action.specificPlanets
            };
        default:
            return state
    }
};

const action = {
    searchPlanets: (searchPlanets: Array<PlanetsSearchType>) => ({
        type: SEARCH_PLANETS, searchPlanets
    } as const),

    specificPlanets: (specificPlanets: PlanetsSpecificType) => ({
        type:SPECIFIC_PLANETS, specificPlanets
    } as const)
}

export const requestSearchPlanets = (planetsName: string) => {
    return async (dispatch: Dispatch) => {
        let {data} = await planetsApi.getSearchPlanets(planetsName);
        dispatch(action.searchPlanets(data.results))
    }
};

export const requestSpecificPlanets = (planetsId: number) => {
    return async (dispatch: Dispatch) => {
        let {data} = await planetsApi.getSpecificPlanets(planetsId);
        dispatch(action.specificPlanets(data))
    }
};

export default planetsReducer;