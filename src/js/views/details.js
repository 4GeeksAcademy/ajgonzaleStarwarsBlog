import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import image from "../../img/800x600.png";
import { useParams } from "react-router";

export const Details = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	const [detail, setDetail] = useState([['']]);

	useEffect((e) => {
		switch (params.id[0]) {
			case 'c' : 
				setDetail([
					['Name', store.characterList[params.id[1]].name],
					['Birth Year', store.characterList[params.id[1]].birth_year],
					['Gender', store.characterList[params.id[1]].gender],
					['Height', store.characterList[params.id[1]].height],
					['Skin Color', store.characterList[params.id[1]].skin_color],
					['Eye Color', store.characterList[params.id[1]].eye_color]
				])
				break;
			case 'v' :
				setDetail([
					['Name', store.vehiclesList[params.id[1]].name],
					['Model', store.vehiclesList[params.id[1]].model],
					['Cargo Capatity', store.vehiclesList[params.id[1]].cargo_capacity],
					['Max Speed', store.vehiclesList[params.id[1]].max_atmosphering_speed],
					['Cost', store.vehiclesList[params.id[1]].cost_in_credits],
					['Class', store.vehiclesList[params.id[1]].vehicle_class]
				])
				break;
			case 'p' :
				setDetail([
					['Name', store.planetsList[params.id[1]].name],
					['Climate', store.planetsList[params.id[1]].climate],
					['Gravity', store.planetsList[params.id[1]].gravity],
					['Terrain', store.planetsList[params.id[1]].terrain],
					['Population', store.planetsList[params.id[1]].population],
					['Diameter', store.planetsList[params.id[1]].diameter]
				])
				break;
		}
	}, []);

    return (
	<div className="container">
		<div className="row title">
			<div className="col-6">
                <img src={image} className="detailsImage"/>
			</div>
            <div className="col-6 text-center">
				<h2>{detail[0][1]}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>
		</div>
        <hr/>
		<div className="row title text-center">
			{detail.map((item, index) => {
					return (
						<div key={params.id+index} className="col-2 red">
							<p><b>{item[0]}</b></p>
							<p>{item[1]}</p>
						</div>
					);
				})}
			
		</div>
	</div>
)};
