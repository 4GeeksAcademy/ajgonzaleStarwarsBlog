import React, { useContext } from "react";
import { Link } from "react-router-dom";

import image from "../../img/400x200.png";
import { Context } from "../store/appContext";

export const Vehicle = (props) => {
    const { store, actions } = useContext(Context);
    
   return (
	<div className="card mx-3" >
        <img src={image} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Class: {props.class}</p>
            <p className="card-text">Max speed: {props.maxSpeed}</p>
            <div className="footerCard">
                <Link to={"/details/v" + props.index} className="btn btn-primary">
                    <span>Learn more!</span>
                </Link>
                <a>
                    {props.favorite ? <i className="fas fa-heart" onClick={e => actions.addFavorites("v"+props.index, props.name)}></i> :
                    <i className="far fa-heart" onClick={e => actions.addFavorites("v"+props.index, props.name)}></i>}
                </a>
            </div>
        </div>
    </div>
)};
