import React from "react";
import {FilmsSpecificType} from "../../Types/TypeFilms";

type FilmsSelectProps = {
    filmsSelect: FilmsSpecificType | null
}

function FilmsComponent({filmsSelect}: FilmsSelectProps) {
  return (
    <div>
      <div>characters: {filmsSelect?.characters}</div>
      <div>created: {filmsSelect?.created}</div>
      <div>director: {filmsSelect?.director}</div>
      <div>edited: {filmsSelect?.edited}</div>
      <div>episode_id: {filmsSelect?.episode_id}</div>
      <div>planets: {filmsSelect?.planets}</div>
      <div>producer: {filmsSelect?.producer}</div>
      <div>release_date: {filmsSelect?.release_date}</div>
      <div>species: {filmsSelect?.species}</div>
      <div>starships: {filmsSelect?.starships}</div>
      <div>title: {filmsSelect?.title}</div>
      <div>URL: {filmsSelect?.url}</div>
      <div>vehicles: {filmsSelect?.vehicles}</div>
    </div>
  );
}

export default FilmsComponent;
