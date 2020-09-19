import React from "react";
import { PlanetsSpecificType } from "../../Types/TypePlanet";

type PlanetsSelectProps = {
        planetsSelect: PlanetsSpecificType | null
}

function PlanetsComponent({planetsSelect}: PlanetsSelectProps) {
    return (
        <div>
            <div>climate: {planetsSelect?.climate}</div>
            <div>created: {planetsSelect?.created}</div>
            <div>diameter: {planetsSelect?.diameter}</div>
            <div>edited: {planetsSelect?.edited}</div>
            <div>films: {planetsSelect?.films}</div>
            <div>gravity: {planetsSelect?.gravity}</div>
            <div>name: {planetsSelect?.name}</div>
            <div>orbital_period: {planetsSelect?.orbital_period}</div>
            <div>population: {planetsSelect?.population}</div>
            <div>residents: {planetsSelect?.residents}</div>
            <div>rotation_period: {planetsSelect?.rotation_period}</div>
            <div>surface_water: {planetsSelect?.surface_water}</div>
            <div>terrain: {planetsSelect?.terrain}</div>
            <div>URL: {planetsSelect?.url}</div>
        </div>
    )
}

export default PlanetsComponent