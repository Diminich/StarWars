import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
});

export const peopleApi = {
    getSearchPeople(peopleName: string) {
        return instance.get(`people/?search=${peopleName}`)
    },

    getSpecificPeople(peopleId: number) {
        return instance.get(`people/${peopleId}`)
    }
};

export const filmsApi = {
    getSearchFilms(titleFilms: string) {
        return instance.get(`films/?search=${titleFilms}`)

    },

    getSpecificFilms(filmsId: number) {
        return instance.get(`films/${filmsId}`)
    }
};

export const starshipsApi = {
    getSearchStarships(starshipsName: string) {
        return instance.get(`starships/?search=${starshipsName}`)
    },

    getSpecificStarships(starshipsId: number) {
        return instance.get(`starships/${starshipsId}`)
    }
};

export const vehiclesApi = {
    getSearchVehicles(vehiclesName: string) {
        return instance.get(`vehicles/?search=${vehiclesName}`)
    },

    getSpecificVehicles(vehiclesId: number) {
        return instance.get(`vehicles/${vehiclesId}`)
    }
};

export const speciesApi = {
    getSearchSpecies(speciesName: string) {
        return instance.get(`species/?search=${speciesName}`)
    },

    getSpecificSpecies(speciesId: number) {
        return instance.get(`species/${speciesId}`)
    }
};

export const planetsApi = {
    getSearchPlanets(planetsName: string) {
        return instance.get(`planets/?search=${planetsName}`)
    },

    getSpecificPlanets(planetsId: number) {
        return instance.get(`planets/${planetsId}`)
    }
};