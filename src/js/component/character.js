import React, { Component } from "react";

import image from "../../img/400x200.png";

export const Character = (props) => {
    
   return (
	<div className="card mx-3" >
        <img src={image} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Gender: {props.gender}</p>
            <p className="card-text">Hair Color: {props.hairColor}</p>
            <p className="card-text">Eye-Color: {props.eyeColor}</p>
            <div className="footerCard">
                <a href="#" className="btn btn-primary">Learn more!</a>
                <a href="#">
                    <i className="far fa-heart"></i>
                </a>
            </div>
        </div>
    </div>
)};
