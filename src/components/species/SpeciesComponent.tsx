import React from "react";
import { SpeciesSpecificType } from "../../Types/TypeSpecies";

type SpecificSelectProps = {
        speciesSelect: SpeciesSpecificType | null
}

function SpeciesComponent({speciesSelect}: SpecificSelectProps) {
    return (
        <div>
            <div>average_height: {speciesSelect?.average_height}</div>
            <div>average_lifespan: {speciesSelect?.average_lifespan}</div>
            <div>classification: {speciesSelect?.classification}</div>
            <div>created: {speciesSelect?.created}</div>
            <div>designation: {speciesSelect?.designation}</div>
            <div>edited: {speciesSelect?.edited}</div>
            <div>eye_colors: {speciesSelect?.eye_colors}</div>
            <div>hair_colors: {speciesSelect?.hair_colors}</div>
            <div>homeworld: {speciesSelect?.homeworld}</div>
            <div>language: {speciesSelect?.language}</div>
            <div>name: {speciesSelect?.name}</div>
            <div>people: {speciesSelect?.people}</div>
            <div>films: {speciesSelect?.films}</div>
            <div>skin_colors: {speciesSelect?.skin_colors}</div>
            <div>URL: {speciesSelect?.url}</div>
        </div>
    )
}

export default SpeciesComponent