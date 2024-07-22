import React from "react";
import { Link } from "react-router-dom";

import starWarsLogo from "../../img/StarWarsLogo.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 navbar-expand-lg">
			<Link to="/">
				<img src={starWarsLogo} className="logo"/>
			</Link>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<button class="nav-item dropdown btn btn-primary">
					<a class="nav-link dropdown-toggle white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<li><a class="dropdown-item" href="#">Empty List</a></li>
					</ul>
				</button>
			</div>
		</nav>
	);
};
