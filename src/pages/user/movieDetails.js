import React from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../../components/MovieDetails";
import { useParams } from "react-router";

const MovieDetailsPage = () => {
	const { id } = useParams(); //get id from route params
	const { movies } = useSelector((state) => state); //get movies from redux store
	const movie = movies.find((movie) => movie.id === parseInt(id)); // get movie by id

	return (
		<>
			<MovieDetails movie={movie} />
		</>
	);
};

export default MovieDetailsPage;
