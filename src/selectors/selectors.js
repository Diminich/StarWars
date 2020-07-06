import React from "react";
import {useSelector} from "react-redux";

export const PeopleComponents = () => {
    const people = useSelector(state => state.peoplePage);
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
    const films = useSelector(state => state.filmsPage)
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
}