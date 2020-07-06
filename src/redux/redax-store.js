import {applyMiddleware, combineReducers, createStore} from "redux";
import peopleReducer from "./people-reducer";
import thunkMiddleware from 'redux-thunk'
import filmsReducer from "./films-reducer";

let reducers = combineReducers({
    peoplePage: peopleReducer,
    filmsPage: filmsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export default store