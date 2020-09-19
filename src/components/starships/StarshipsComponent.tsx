import React from "react";
import { StarshipsSpecificType } from "../../Types/TypeStarships";

type StarshipsSelectProps = {
        starshipsSelect: StarshipsSpecificType | null
}

function StarshipsComponent({starshipsSelect}: StarshipsSelectProps) {
    return (
        <div>
            <div>MGLT: {starshipsSelect?.MGLT}</div>
            <div>cargo_capacity: {starshipsSelect?.cargo_capacity}</div>
            <div>consumables: {starshipsSelect?.consumables}</div>
            <div>cost_in_credits: {starshipsSelect?.cost_in_credits}</div>
            <div>created: {starshipsSelect?.created}</div>
            <div>crew: {starshipsSelect?.crew}</div>
            <div>edited: {starshipsSelect?.edited}</div>
            <div>hyperdrive_rating: {starshipsSelect?.hyperdrive_rating}</div>
            <div>length: {starshipsSelect?.length}</div>
            <div>manufacturer: {starshipsSelect?.manufacturer}</div>
            <div>max_atmosphering_speed: {starshipsSelect?.max_atmosphering_speed}</div>
            <div>model: {starshipsSelect?.model}</div>
            <div>name: {starshipsSelect?.name}</div>
            <div>passengers: {starshipsSelect?.passengers}</div>
            <div>films: {starshipsSelect?.films}</div>
            <div>pilots: {starshipsSelect?.pilots}</div>
            <div>starship_class: {starshipsSelect?.starship_class}</div>
            <div>URL: {starshipsSelect?.url}</div>
        </div>
    )
}

export default StarshipsComponent