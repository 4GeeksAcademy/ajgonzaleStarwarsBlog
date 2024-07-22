import React, { Component } from "react";

import image from "../../img/400x200.png";

export const Vehicle = (props) => {
    
   return (
	<div className="card mx-3" >
        <img src={image} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Class: {props.class}</p>
            <p className="card-text">Max speed: {props.maxSpeed}</p>
            <div className="footerCard">
                <a href="#" className="btn btn-primary">Learn more!</a>
                <a href="#">
                    <i className="far fa-heart"></i>
                </a>
            </div>
        </div>
    </div>
)};
