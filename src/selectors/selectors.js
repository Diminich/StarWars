import React from "react";
import {useSelector} from "react-redux";

export const PeopleComponents = () => {
    const people = useSelector(state => state.peoplePage);
    console.log(people);
    return (
        <div>
            <div>name: {people.name}</div>
            <div>height: {people.height}</div>
            <div>mass: {people.mass}</div>
            <div>hair_color: {people.hair_color}</div>
            <div>skin_color: {people.skin_color}</div>
            <div>eye_color: {people.eye_color}</div>
            <div>birth_year: {people.birth_year}</div>
            <div>gender: {people.gender}</div>
            <div>Homeworld: {people.Homeworld}</div>
            <div>films: {people.films}</div>
            <div>species: {people.species}</div>
            <div>vehicles: {people.vehicles}</div>
            <div>starships: {people.starships}</div>
            <div>created: {people.created}</div>
            <div>edited: {people.edited}</div>
            <div>URL: {people.url}</div>
        </div>
    )
};

export const FilmsComponents = () => {
    const films = useSelector(state => state.filmsPage);
    return (
        <div>
            <div>characters: {films.characters}</div>
            <div>created: {films.created}</div>
            <div>director: {films.director}</div>
            <div>edited: {films.edited}</div>
            <div>episode_id: {films.episode_id}</div>
            <div>planets: {films.planets}</div>
            <div>producer: {films.producer}</div>
            <div>release_date: {films.release_date}</div>
            <div>species: {films.species}</div>
            <div>starships: {films.starships}</div>
            <div>title: {films.title}</div>
            <div>URL: {films.url}</div>
            <div>vehicles: {films.vehicles}</div>
        </div>
    )
};

export const StarshipsComponents = () => {
    const starships = useSelector(state => state.starshipsPage);
    return (
        <div>
            <div>MGLT: {starships.MGLT}</div>
            <div>cargo_capacity: {starships.cargo_capacity}</div>
            <div>consumables: {starships.consumables}</div>
            <div>cost_in_credits: {starships.cost_in_credits}</div>
            <div>created: {starships.created}</div>
            <div>crew: {starships.crew}</div>
            <div>edited: {starships.edited}</div>
            <div>hyperdrive_rating: {starships.hyperdrive_rating}</div>
            <div>length: {starships.length}</div>
            <div>manufacturer: {starships.manufacturer}</div>
            <div>max_atmosphering_speed: {starships.max_atmosphering_speed}</div>
            <div>model: {starships.model}</div>
            <div>name: {starships.name}</div>
            <div>passengers: {starships.passengers}</div>
            <div>films: {starships.films}</div>
            <div>pilots: {starships.pilots}</div>
            <div>starship_class: {starships.starship_class}</div>
            <div>URL: {starships.url}</div>
        </div>
    )
};

export const VehiclesComponents = () => {
  const vehicles = useSelector(state => state.vehiclesPage);
    return (
        <div>
            <div>cargo_capacity: {vehicles.cargo_capacity}</div>
            <div>consumables: {vehicles.consumables}</div>
            <div>cost_in_credits: {vehicles.cost_in_credits}</div>
            <div>created: {vehicles.created}</div>
            <div>crew: {vehicles.crew}</div>
            <div>edited: {vehicles.edited}</div>
            <div>length: {vehicles.length}</div>
            <div>manufacturer: {vehicles.manufacturer}</div>
            <div>max_atmosphering_speed: {vehicles.max_atmosphering_speed}</div>
            <div>model: {vehicles.model}</div>
            <div>name: {vehicles.name}</div>
            <div>passengers: {vehicles.passengers}</div>
            <div>pilots: {vehicles.pilots}</div>
            <div>films: {vehicles.films}</div>
            <div>URL: {vehicles.url}</div>
            <div>vehicle_class: {vehicles.vehicle_class}</div>
        </div>
    )
};

export const SpeciesComponents = () => {
    const species = useSelector(state => state.speciesPage);
    return (
        <div>
            <div>average_height: {species.average_height}</div>
            <div>average_lifespan: {species.average_lifespan}</div>
            <div>classification: {species.classification}</div>
            <div>created: {species.created}</div>
            <div>designation: {species.designation}</div>
            <div>edited: {species.edited}</div>
            <div>eye_colors: {species.eye_colors}</div>
            <div>hair_colors: {species.hair_colors}</div>
            <div>homeworld: {species.homeworld}</div>
            <div>language: {species.language}</div>
            <div>name: {species.name}</div>
            <div>people: {species.people}</div>
            <div>films: {species.films}</div>
            <div>skin_colors: {species.skin_colors}</div>
            <div>URL: {species.url}</div>
        </div>
    )
};

export const PlanetsComponents = () => {
    const planets = useSelector(state => state.planetsPage)
    return (
        <div>
            <div>climate: {planets.climate}</div>
            <div>created: {planets.created}</div>
            <div>diameter: {planets.diameter}</div>
            <div>edited: {planets.edited}</div>
            <div>films: {planets.films}</div>
            <div>gravity: {planets.gravity}</div>
            <div>name: {planets.name}</div>
            <div>orbital_period: {planets.orbital_period}</div>
            <div>population: {planets.population}</div>
            <div>residents: {planets.residents}</div>
            <div>rotation_period: {planets.rotation_period}</div>
            <div>surface_water: {planets.surface_water}</div>
            <div>terrain: {planets.terrain}</div>
            <div>URL: {planets.url}</div>
        </div>
    )
};