import React from "react";
import {PeopleSpecificType} from "../../Types/TypePeople";

type PeoplesSelectProps = {
        peoplesSelect: PeopleSpecificType | null
}

function PeopleComponent({peoplesSelect}: PeoplesSelectProps) {
    return (
        <div>
            <div>Name: {peoplesSelect?.name}</div>
            <div>Height: {peoplesSelect?.height}</div>
            <div>Mass: {peoplesSelect?.mass}</div>
            <div>Hair_color: {peoplesSelect?.hair_color}</div>
            <div>Skin_color: {peoplesSelect?.skin_color}</div>
            <div>Eye_color: {peoplesSelect?.eye_color}</div>
            <div>Birth_year: {peoplesSelect?.birth_year}</div>
            <div>Gender: {peoplesSelect?.gender}</div>
            <div>homeWorld: {peoplesSelect?.homeworld}</div>
            <div>Films: {peoplesSelect?.films}</div>
            <div>Species: {peoplesSelect?.species}</div>
            <div>Vehicles: {peoplesSelect?.vehicles}</div>
            <div>Starships: {peoplesSelect?.starships}</div>
            <div>Created: {peoplesSelect?.created}</div>
            <div>Edited: {peoplesSelect?.edited}</div>
            <div>URL: {peoplesSelect?.url}</div>
        </div>
    )
}

export default PeopleComponent