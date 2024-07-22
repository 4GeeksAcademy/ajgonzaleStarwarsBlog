import React, { useContext } from "react";
import "../../styles/home.css";
import { Character } from "../component/character";
import { Vehicle } from "../component/vehicle";
import { Planet } from "../component/planet";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
	<div class="container">
		
		<div class="row title">
			<div className="col-12 red">
				<h2>Characters</h2>
			</div>
		</div>
		<div class="row rowList">
			{store.characterList.map((item, index) => {
					return (
						<Character index={index} name={item.name} gender={item.gender} hairColor={item.hair_color} eyeColor={item.eye_color} />
					);
				})}
		</div>	
		<div class="row title">
			<div className="col-12 red">
				<h2>Vehicles</h2>
			</div>
		</div>
		<div class="row rowList">
			{store.vehiclesList.map((item, index) => {
					return (
						<Vehicle name={item.name} class={item.vehicle_class} maxSpeed={item.max_atmosphering_speed} />
					);
				})}
		</div>	
		<div class="row title">
			<div className="col-12 red">
				<h2>Planets</h2>
			</div>
		</div>
		<div class="row rowList">
			{store.planetsList.map((item, index) => {
					return (
						<Planet name={item.name} population={item.population} terrain={item.terrain} />
					);
				})}
		</div>		
	</div>
)};
