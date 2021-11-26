import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div class="jumbotron jumbotron-fluid text-center bg-light bg-gradient">
			<Link to="/">
				<h1 class="display-4">MovieZone</h1>
			</Link>
			<p class="lead">Grab Your Popcorn And Sit Back...</p>
			<Link to="movies">Admin Movies</Link>{" "}
			<Link to="cinemas">Admin Cinemas</Link>
		</div>
	);
};

export default Navbar;
