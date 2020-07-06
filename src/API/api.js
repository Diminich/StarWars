import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://swapi.dev/api/'
});

export const peopleApi = {
    getNamePeople(peopleId) {
        return instance.get(`people/${peopleId}/`)
    }
};

export const filmsApi = {
    getTitleFilms(titleFilms) {
        return instance.get(`films/${titleFilms}/`)
    }
};