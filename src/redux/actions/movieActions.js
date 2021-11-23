import {
	FETCH_MOVIES_REQUEST,
	FETCH_MOVIES_FAILURE,
	FETCH_MOVIES_SUCCESS,
	SET_SELECTED_MOVIE,
} from "../actionTypes";
import axios from "axios";

export const fetchMoviesRequest = () => {
	return {
		type: FETCH_MOVIES_REQUEST,
	};
};
export const fetchMoviesSuccess = (movies) => {
	return {
		type: FETCH_MOVIES_SUCCESS,
		payload: movies,
	};
};
export const fetchMoviesFailure = (error) => {
	return {
		type: FETCH_MOVIES_FAILURE,
		payload: error,
	};
};
export const fetchMovies = () => {
	return (dispatch) => {
		const localMovies = JSON.parse(localStorage.getItem("movies"));
		if (localMovies) {
			dispatch(fetchMoviesSuccess(localMovies));
		} else {
			dispatch(fetchMoviesRequest);
			axios
				.get("https://college-movies.herokuapp.com/")
				.then((response) => {
					const movies = response.data;
					movies.map((m) => {
						const bookings = {
							mon: [],
							tue: [],
							wed: [],
							thu: [],
							fri: [],
							sat: [],
							sun: [],
						};
						const runningTimes = m.runningTimes;
						for (const key in runningTimes) {
							runningTimes[key].map((t) => {
								if (key == "mon") {
									bookings.mon.push({ time: t, booked: [] });
								}
								if (key == "tue") {
									bookings.tue.push({ time: t, booked: [] });
								}
								if (key == "wed") {
									bookings.wed.push({ time: t, booked: [] });
								}
								if (key == "thu") {
									bookings.thu.push({ time: t, booked: [] });
								}
								if (key == "fri") {
									bookings.fri.push({ time: t, booked: [] });
								}
								if (key == "sat") {
									bookings.sat.push({ time: t, booked: [] });
								}
								if (key == "sun") {
									bookings.sun.push({ time: t, booked: [] });
								}
							});
						}
						m.bookings = bookings;
					});
					localStorage.setItem("movies", JSON.stringify(movies));
					dispatch(fetchMoviesSuccess(movies));
				})
				.catch((error) => {
					const err = error.message;
					dispatch(fetchMoviesFailure(err));
				});
		}
	};
};

export const setSelectedMovie = (movie) => {
	return {
		type: SET_SELECTED_MOVIE,
		payload: movie,
	};
};
