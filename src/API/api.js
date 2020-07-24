import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://swapi.dev/api/'
});

export const peopleApi = {
    getSearchPeople(peopleName) {
        return instance.get(`people/?search=${peopleName}`)
    },

    getSpecificPeople(peopleId) {
        return instance.get(`people/${peopleId}`)
    }
};

export const filmsApi = {
    getSearchFilms(titleFilms) {
        return instance.get(`films/?search=${titleFilms}`)

    },

    getSpecificFilms(filmsId) {
        return instance.get(`films/${filmsId}`)
    }
};

export const starshipsApi = {
    getSearchStarships(starshipsName) {
        return instance.get(`starships/?search=${starshipsName}`)
    },

    getSpecificStarships(starshipsId) {
        return instance.get(`starships/${starshipsId}`)
    }
};

export const vehiclesApi = {
    getSearchVehicles(vehiclesName) {
        return instance.get(`vehicles/?search=${vehiclesName}`)
    },

    getSpecificVehicles(vehiclesId) {
        return instance.get(`vehicles/${vehiclesId}`)
    }
};

export const speciesApi = {
    getSearchSpecies(speciesName) {
        return instance.get(`species/?search=${speciesName}`)
    },

    getSpecificSpecies(speciesId) {
        return instance.get(`species/${speciesId}`)
    }
};

export const planetsApi = {
    getSearchPlanets(planetsName) {
        return instance.get(`planets/?search=${planetsName}`)
    },

    getSpecificPlanets(planetsId) {
        return instance.get(`planets/${planetsId}`)
    }
};