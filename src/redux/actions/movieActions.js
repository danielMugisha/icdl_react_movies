import {
	FETCH_MOVIES_REQUEST,
	FETCH_MOVIES_FAILURE,
	FETCH_MOVIES_SUCCESS,
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
		dispatch(fetchMoviesRequest);
		axios
			.get("https://college-movies.herokuapp.com/")
			.then((response) => {
				const movies = response.data;
				/* append a bookings object on every movie 
					to store all the reservations on specific running times*/
				const cinemas = [0, 1, 2, 3, 4, 5];
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
					const cinema =
						movies.indexOf(m) < 6
							? cinemas[movies.indexOf(m)]
							: movies.indexOf(m) % 6;
					const runningTimes = m.runningTimes;
					for (const key in runningTimes) {
						runningTimes[key].forEach((t) => {
							if (key === "mon") {
								bookings.mon.push({
									time: t,
									booked: [],
								});
							}
							if (key === "tue") {
								bookings.tue.push({
									time: t,
									booked: [],
								});
							}
							if (key === "wed") {
								bookings.wed.push({
									time: t,
									booked: [],
								});
							}
							if (key === "thu") {
								bookings.thu.push({
									time: t,
									booked: [],
								});
							}
							if (key === "fri") {
								bookings.fri.push({
									time: t,
									booked: [],
								});
							}
							if (key === "sat") {
								bookings.sat.push({
									time: t,
									booked: [],
								});
							}
							if (key === "sun") {
								bookings.sun.push({
									time: t,
									booked: [],
								});
							}
						});
					}
					m.bookings = bookings;
					m.cinema = cinema;
					return m;
				});

				dispatch(fetchMoviesSuccess(movies));
			})
			.catch((error) => {
				const err = error.message;
				dispatch(fetchMoviesFailure(err));
			});
	};
};
