import React, { useContext } from "react";
import { Link } from "react-router-dom";

import image from "../../img/400x200.png";
import { Context } from "../store/appContext";

export const Planet = (props) => {
    const { store, actions } = useContext(Context);

   return (
	<div className="card mx-3" >
        <img src={image} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Population: {props.population}</p>
            <p className="card-text">Terrain: {props.terrain}</p>
            <div className="footerCard">
                <Link to={"/details/p" + props.index} className="btn btn-primary">
                    <span>Learn more!</span>
                </Link>
                <a>
                    {props.favorite ? <i className="fas fa-heart" onClick={e => actions.addFavorites("p"+props.index, props.name)}></i> :
                    <i className="far fa-heart" onClick={e => actions.addFavorites("p"+props.index, props.name)}></i>}
                </a>
            </div>
        </div>
    </div>
)};
