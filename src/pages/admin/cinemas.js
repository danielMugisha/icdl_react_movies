import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Cinemas = () => {
	const navigate = useNavigate();
	const { movies } = useSelector((state) => state);
	const cinemas = {
		"Cinema-1": [],
		"Cinema-2": [],
		"Cinema-3": [],
		"Cinema-4": [],
		"Cinema-5": [],
		"Cinema-6": [],
	};
	movies.forEach((movie) => {
		switch (movie.cinema) {
			case 0:
				cinemas["Cinema-1"].push(movie);
				break;
			case 1:
				cinemas["Cinema-2"].push(movie);
				break;
			case 2:
				cinemas["Cinema-3"].push(movie);
				break;
			case 3:
				cinemas["Cinema-4"].push(movie);
				break;
			case 4:
				cinemas["Cinema-5"].push(movie);
				break;
			case 5:
				cinemas["Cinema-6"].push(movie);
				break;

			default:
				break;
		}
	});

	const goToMovies = (cinema) => {
		if (cinemas[cinema].length > 0) {
			navigate("/movies", {
				state: { cinema, movies: cinemas[cinema] },
			});
		} else {
			window.alert("no movies in the cinema");
		}
	};

	return (
		<div className="container-fluid w-75 mt-5">
			{Object.keys(cinemas).map((cinema) => {
				return (
					<div
						onClick={() => goToMovies(cinema)}
						className="mb-2 border d-flex justify-content-between"
					>
						<div className="m-2">
							<h3>{cinema}</h3>
						</div>
						<div className="m-2 d-flex align-items-center">
							<h5>{cinemas[cinema].length} movies</h5>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cinemas;
