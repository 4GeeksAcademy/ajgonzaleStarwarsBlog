import React from "react";
import { Link } from "react-router-dom";

import starWarsLogo from "../../img/StarWarsLogo.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={starWarsLogo} className="logo"/>
				</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
