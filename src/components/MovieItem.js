import React from "react";
import poster from "../assets/images/movie-poster-placeholder.png";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie, day }) => {
	const runningTimes = movie?.runningTimes;
	const navigate = useNavigate();

	const handleMovieDetails = () => {
		navigate(`/movie/${movie.id}`);
	};

	const handleBooking = (time) => {
		let stringDay = "";
		switch (day) {
			case 0:
				stringDay = "sun";
				break;
			case 1:
				stringDay = "mon";
				break;
			case 2:
				stringDay = "tue";
				break;
			case 3:
				stringDay = "wed";
				break;
			case 4:
				stringDay = "thu";
				break;
			case 5:
				stringDay = "fri";
				break;
			case 6:
				stringDay = "sat";
				break;

			default:
				break;
		}
		navigate("/booking", { state: { movie, day: stringDay, time } });
	};

	return (
		<div className="d-flex p-2 border-bottom border-2 border-light">
			<div>
				<img src={poster} alt="poster" width="100px" title={movie.title} />
			</div>
			<div className="px-5 py-3">
				<h2 onClick={handleMovieDetails}>{movie.title}</h2>

				<h5>{movie.year}</h5>
				<div className="bg-light p-2 xindex-offcanvas">
					{runningTimes
						? day === 1
							? runningTimes.mon.map((time) => (
									<button
										onClick={() => handleBooking(time)}
										className="btn btn-primary me-3 btn-sm"
									>
										{time}
									</button>
							  ))
							: day === 2
							? runningTimes.tue.map((time) => (
									<button
										onClick={() => handleBooking(time)}
										className="btn btn-primary me-3 btn-sm"
									>
										{time}
									</button>
							  ))
							: day === 3
							? runningTimes.wed.map((time) => (
									<button
										onClick={() => handleBooking(time)}
										className="btn btn-primary me-3 btn-sm"
									>
										{time}
									</button>
							  ))
							: day === 4
							? runningTimes.thu.map((time) => (
									<button
										onClick={() => handleBooking(time)}
										className="btn btn-primary me-3 btn-sm"
									>
										{time}
									</button>
							  ))
							: day === 5
							? runningTimes.fri.map((time) => (
									<button
										onClick={() => handleBooking(time)}
										className="btn btn-primary me-3 btn-sm"
									>
										{time}
									</button>
							  ))
							: day === 6
							? runningTimes.sat.map((time) => (
									<button
										onClick={() => handleBooking(time)}
										className="btn btn-primary me-3 btn-sm"
									>
										{time}
									</button>
							  ))
							: day === 0
							? runningTimes.sun.map((time) => (
									<button
										onClick={() => handleBooking(time)}
										className="btn btn-primary me-3 btn-sm"
									>
										{time}
									</button>
							  ))
							: ""
						: ""}
				</div>
			</div>
		</div>
	);
};

export default MovieItem;
