import React from "react";
import { useSelector } from "react-redux";
import MovieDetails from "../../components/MovieDetails";
import { useParams } from "react-router";

const MovieDetailsPage = () => {
	const { id } = useParams();
	console.log(id);
	const movies = useSelector((state) => state.movies);
	const movie = movies.find((movie) => movie.id === id);

	return (
		<>
			<MovieDetails movie={movie} />
		</>
	);
};

export default MovieDetailsPage;
