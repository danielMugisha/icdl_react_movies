import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const Movies = () => {
	const location = useLocation();
	const allMovies = useSelector((state) => state.movies);
	const data = location.state;
	let movies = [];
	let cinema = "";
	if (data) {
		movies = data.movies;
		cinema = data.cinema;
	} else {
		movies = allMovies;
		cinema = "All Movies";
	}
	const [selectedMovie, setSelectedMovie] = useState(movies[0]);
	const [selectedDay, setSelectedDay] = useState("mon");
	const [selectedTime, setSelectedTime] = useState(
		selectedMovie?.runningTimes[selectedDay][0]
	);
	let alreadyBooked = [];

	selectedMovie?.bookings[selectedDay].filter((b) => {
		if (b.time === selectedTime) {
			b.booked?.map((b) => {
				b.seats?.forEach((seat) => {
					alreadyBooked.push(seat);
					return alreadyBooked;
				});
				return alreadyBooked;
			});
		}
		return alreadyBooked;
	});

	// create seats
	const seats = [];
	for (let j = 1; j < 11; j++) {
		const row = [];
		for (let i = 1; i < 11; i++) {
			row.push(`${j}|${i}`);
		}
		seats.push(row); //push rows (this makes seats a 2-d array)
	}

	return (
		<div className="d-flex">
			<Sidebar
				movies={movies}
				cinema={cinema}
				selectedMovie={selectedMovie}
				setSelectedMovie={setSelectedMovie}
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
			/>
			<div className="w-100 container">
				<div>
					<h2>{selectedMovie.title}</h2>
				</div>
				<div className="mb-3">
					{selectedMovie?.runningTimes[selectedDay].map((time) => (
						<button
							onClick={() => setSelectedTime(time)}
							className="btn btn-primary me-3 btn-sm"
						>
							{time}
						</button>
					))}
				</div>
				<div>
					{selectedMovie.bookings[selectedDay].map((t) => {
						return (
							<div>
								{t.time === selectedTime ? (
									<div>
										{t.booked.map((b) => {
											return (
												<div className="d-flex justify-content-between p-2">
													<div className="mx-2">{b.client.names}</div>
													<div className="mx-2">{b.client.email}</div>
													<div className="flex-grow-1 d-flex justify-content-end">
														{b.seats.map((s) => {
															return <span className="mx-2">{s}</span>;
														})}
													</div>
												</div>
											);
										})}
									</div>
								) : (
									""
								)}
							</div>
						);
					})}
				</div>
				{seats.map((s) => {
					return (
						<div>
							{s.map((c) =>
								alreadyBooked.includes(c) ? (
									<button
										// onClick={() => saveSeat(c)}
										className="seatButton m-2 bg-danger"
										disabled
									>
										{c}
									</button>
								) : (
									<button
										// onClick={() => saveSeat(c)}
										className="seatButton m-2"
									>
										{c}
									</button>
								)
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Movies;
