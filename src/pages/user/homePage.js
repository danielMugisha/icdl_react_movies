import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieItem from "../../components/MovieItem";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const HomePage = () => {
	const { movies, loading, error } = useSelector((state) => state);
	const [chosenDay, setChosenDay] = useState(0);

	const handleChangeDay = (day) => {
		setChosenDay(WEEK_DAYS.indexOf(day));
	};

	useEffect(() => {}, [chosenDay]);
	return (
		<>
			{loading ? (
				<>fetching data...</>
			) : error ? (
				<>{error}</>
			) : (
				<div>
					<div>
						<h2>Weekly Schedule</h2>
					</div>
					<div>
						{WEEK_DAYS.map((day) =>
							WEEK_DAYS.indexOf(day) == chosenDay ? (
								<button
									className="btn btn-primary me-3 btn-sm day-button"
									value={day}
									onClick={(e) => {
										handleChangeDay(e.target.value);
									}}
								>
									{day}
								</button>
							) : (
								<button
									className="btn btn-light me-3 btn-sm day-button"
									value={day}
									onClick={(e) => {
										handleChangeDay(e.target.value);
									}}
								>
									{day}
								</button>
							)
						)}
					</div>
					<div className="mb-5">
						{movies.map((movie) => (
							<MovieItem movie={movie} day={chosenDay} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default HomePage;
