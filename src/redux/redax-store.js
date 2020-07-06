import {applyMiddleware, combineReducers, createStore} from "redux";
import peopleReducer from "./people-reducer";
import thunkMiddleware from 'redux-thunk'
import filmsReducer from "./films-reducer";
import starshipsReducer from "./starships-reducer"
import vehiclesReducer from "./vehicles-reducer";
import speciesReducer from "./species-reducer";
import planetsReducer from "./planets-reducer";

let reducers = combineReducers({
    peoplePage: peopleReducer,
    filmsPage: filmsReducer,
    starshipsPage: starshipsReducer,
    vehiclesPage: vehiclesReducer,
    speciesPage: speciesReducer,
    planetsPage: planetsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store