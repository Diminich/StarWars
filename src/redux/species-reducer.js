import {speciesApi} from "../API/api";

const SPECIES = 'SPECIES';

let initialState = {
    average_height: "",
    average_lifespan: "",
    classification: "",
    created: "",
    designation: "",
    edited: "",
    eye_colors: "",
    hair_colors: "",
    homeworld: "",
    language: "",
    name: "",
    people: [],
    films: [],
    skin_colors: "",
    url: ""
};

const speciesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPECIES:
            return {
                ...action.species
            };
        default:
            return state
    }
};

export const species = (species) => ({
    type: SPECIES, species
});

export const getSpecies = (titleSpecies) => {
    return async (dispatch) => {
        let response = await speciesApi.getSpeciesTitle(titleSpecies);
        dispatch(species(response.data))
    }
};

export default speciesReducer;