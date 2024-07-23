import React, { useContext } from "react";
import { Link } from "react-router-dom";

import starWarsLogo from "../../img/StarWarsLogo.jpg";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3 navbar-expand-lg">
			<Link to="/">
				<img src={starWarsLogo} className="logo"/>
			</Link>
			<div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
				<button class="nav-item dropdown btn btn-primary">
					<a class="nav-link dropdown-toggle white" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						{store.favorites.map((item, index) => {
							return (
								<li key={index} className="d-flex align-items-center">
									<Link to={"/details/" + item.index} className="dropdown-item">
										{item.name}
									</Link>
									<i class="fas fa-trash-alt me-2" onClick={e => actions.addFavorites(item.index, item.name)}></i>
								</li>
							);
						})}
						{store.favorites.length == 0 && <li><a class="dropdown-item" href="#">Empty List</a></li>}
					</ul>
				</button>
			</div>
		</nav>
	);
};
