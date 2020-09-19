import React from "react";
import {VechilesSpecificType} from "../../Types/TypeVechiles";

type VehiclesSelectProps = {
        vehiclesSelect: VechilesSpecificType | null
}

function VehiclesComponent({vehiclesSelect}: VehiclesSelectProps) {
    return (
        <div>
            <div>cargo_capacity: {vehiclesSelect?.cargo_capacity}</div>
            <div>consumables: {vehiclesSelect?.consumables}</div>
            <div>cost_in_credits: {vehiclesSelect?.cost_in_credits}</div>
            <div>created: {vehiclesSelect?.created}</div>
            <div>crew: {vehiclesSelect?.crew}</div>
            <div>edited: {vehiclesSelect?.edited}</div>
            <div>length: {vehiclesSelect?.length}</div>
            <div>manufacturer: {vehiclesSelect?.manufacturer}</div>
            <div>max_atmosphering_speed: {vehiclesSelect?.max_atmosphering_speed}</div>
            <div>model: {vehiclesSelect?.model}</div>
            <div>name: {vehiclesSelect?.name}</div>
            <div>passengers: {vehiclesSelect?.passengers}</div>
            <div>pilots: {vehiclesSelect?.pilots}</div>
            <div>films: {vehiclesSelect?.films}</div>
            <div>URL: {vehiclesSelect?.url}</div>
            <div>vehicle_class: {vehiclesSelect?.vehicle_class}</div>
        </div>
    )
}

export default VehiclesComponent