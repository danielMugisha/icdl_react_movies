import React, { useState } from "react";

const Sidebar = ({
	movies,
	cinema,
	selectedMovie,
	selectedDay,
	setSelectedDay,
	setSelectedMovie,
}) => {
	// const [selectedDay, setSelectedDay] = useState("mon");
	// const [selectedMovie, setSelectedMovie] = useState(movies[0])
	return (
		<div className="w-25 bg-light mt-1">
			<h2>{cinema}</h2>
			<div>
				{movies.map((movie) => {
					return (
						<div>
							<div
								className="movie-list-item"
								onClick={() => setSelectedMovie(movie)}
							>
								{movie.title}
							</div>
							<div>
								{Object.keys(movie.runningTimes).map((d) => {
									return (
										<>
											{d == "mon" ? (
												<button
													onClick={() => {
														setSelectedMovie(movie);
														setSelectedDay(d);
													}}
													className="btn btn-light m-1 btn-sm"
												>
													Monday
												</button>
											) : d == "tue" ? (
												<button
													onClick={() => {
														setSelectedMovie(movie);
														setSelectedDay(d);
													}}
													className="btn btn-light m-1 btn-sm"
												>
													Tuesday
												</button>
											) : d == "wed" ? (
												<button
													onClick={() => {
														setSelectedMovie(movie);
														setSelectedDay(d);
													}}
													className="btn btn-light m-1 btn-sm"
												>
													Wednesday
												</button>
											) : d == "thu" ? (
												<button
													onClick={() => {
														setSelectedMovie(movie);
														setSelectedDay(d);
													}}
													className="btn btn-light m-1 btn-sm"
												>
													Thursday
												</button>
											) : d == "fri" ? (
												<button
													onClick={() => {
														setSelectedMovie(movie);
														setSelectedDay(d);
													}}
													className="btn btn-light m-1 btn-sm"
												>
													Friday
												</button>
											) : d == "sat" ? (
												<button
													onClick={() => {
														setSelectedMovie(movie);
														setSelectedDay(d);
													}}
													className="btn btn-light m-1 btn-sm"
												>
													Saturday
												</button>
											) : d == "sun" ? (
												<button
													onClick={() => {
														setSelectedMovie(movie);
														setSelectedDay(d);
													}}
													className="btn btn-light m-1 btn-sm"
												>
													Sunday
												</button>
											) : (
												""
											)}
										</>
									);
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sidebar;
