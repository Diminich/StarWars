import {starshipsApi} from "../API/api";

const STARSHIPS = 'STARSHIPS';

let initialState = {
    MGLT: "",
    cargo_capacity: "",
    consumables: "",
    cost_in_credits: "",
    created: "",
    crew: "",
    edited: "",
    hyperdrive_rating: "",
    length: "",
    manufacturer: "",
    max_atmosphering_speed: "",
    model: "",
    name: "",
    passengers: "",
    films: [],
    pilots: [],
    starship_class: "",
    url: ""
};

const starshipsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STARSHIPS:
            return {
                ...action.starships
            };
        default:
            return state
    }
};

const starships = (starships) => ({
  type: STARSHIPS, starships
});

export const getStarships = (starshipsTitle) => {
    return async (dispatch) => {
        let response = await starshipsApi.getStarshipsTitle(starshipsTitle);
        dispatch(starships(response.data))
    }
};

export default starshipsReducer;