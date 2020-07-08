import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://swapi.dev/api/'
});

export const peopleApi = {
    getNamePeople(peopleName) {
        return instance.get(`people/?search=${peopleName}`)
    }
};

export const filmsApi = {
    getTitleFilms(titleFilms) {
        return instance.get(`films/${titleFilms}/`)

    }
};

export const starshipsApi = {
    getStarshipsTitle(titleStarships) {
        return instance.get(`starships/${titleStarships}`)
    }
};

export const vehiclesApi = {
  getVehiclesTitle(titleVehicles) {
      return instance.get(`vehicles/${titleVehicles}`)
  }
};

export const speciesApi = {
    getSpeciesTitle(titleSpecies) {
        return instance.get(`species/${titleSpecies}`)
    }
};

export const planetsApi = {
    getPlanetsTitle(titlePlanets) {
        return instance.get(`planets/${titlePlanets}`)
    }
}