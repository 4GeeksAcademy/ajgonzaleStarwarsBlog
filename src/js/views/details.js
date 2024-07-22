import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import image from "../../img/800x600.png";
import { useParams } from "react-router";

export const Details = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();

    return (
	<div class="container">
		<div class="row title">
			<div className="col-6">
                <img src={image} className="detailsImage"/>
			</div>
            <div className="col-6 text-center">
				<h2>{store.characterList[params.id].name}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
		</div>
        <hr/>
		<div class="row title text-center">
			<div className="col-2 red">
                <p><b>Name</b></p>
				<p>{store.characterList[params.id].name}</p>
			</div>
            <div className="col-2 red">
                <p><b>birth Year</b></p>
				<p>{store.characterList[params.id].birth_year}</p>
			</div>
            <div className="col-2 red">
                <p><b>Gender</b></p>
				<p>{store.characterList[params.id].gender}</p>
			</div>
            <div className="col-2 red">
                <p><b>Height</b></p>
				<p>{store.characterList[params.id].height}</p>
			</div>
            <div className="col-2 red">
                <p><b>Skin Color</b></p>
				<p>{store.characterList[params.id].skin_color}</p>
			</div>
            <div className="col-2 red">
                <p><b>Eye Color</b></p>
				<p>{store.characterList[params.id].eye_color}</p>
			</div>
		</div>
	</div>
)};
