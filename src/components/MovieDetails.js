import React from "react";
import { useNavigate } from "react-router";

const MovieDetails = ({ movie }) => {
	const navigate = useNavigate();
	const handleReservation = (day, time) => {
		console.log(day, time);
		const params = { movie, day, time };
		navigate("/booking", { state: { movie, day, time } });
	};
	return (
		<div className="p-5">
			<div className="border-top border-bottom">
				<h2>{movie.title}</h2>
			</div>
			<div className="pt-4 d-flex justify-content-between">
				<div>
					<h5>Sypnosis:</h5>
					<p>{movie.notes}</p>
				</div>
				<div>
					<span className="tag">Director:</span> {movie.director}
					<br />
					<span className="tag">Genre:</span> {movie.genre}
					<br />
					<span className="tag"> Cast:</span> {movie.cast}
					<br />
					<span className="tag"> Release Year:</span> {movie.year}
					<br />
				</div>
			</div>
			<div>
				<h3>Showing Times</h3>
			</div>
			<div>
				<div className="mb-3">
					<h6>Sunday</h6>
					<div>
						{movie?.runningTimes?.sun.map((time) => (
							<button
								onClick={() => handleReservation("sun", time)}
								className="btn btn-primary me-3 btn-sm"
							>
								{time}
							</button>
						))}
					</div>
				</div>
				<div className="mb-3">
					<h6>Monday</h6>
					<div>
						{movie?.runningTimes?.mon.map((time) => (
							<button
								onClick={() => handleReservation("mon", time)}
								className="btn btn-primary me-3 btn-sm"
							>
								{time}
							</button>
						))}
					</div>
				</div>
				<div className="mb-3">
					<h6>Tuesday</h6>
					<div>
						{movie?.runningTimes?.tue.map((time) => (
							<button
								onClick={() => handleReservation("tue", time)}
								className="btn btn-primary me-3 btn-sm"
							>
								{time}
							</button>
						))}
					</div>
				</div>
				<div className="mb-3">
					<h6>Wednesday</h6>
					<div>
						{movie?.runningTimes?.wed.map((time) => (
							<button
								onClick={() => handleReservation("wed", time)}
								className="btn btn-primary me-3 btn-sm"
							>
								{time}
							</button>
						))}
					</div>
				</div>
				<div className="mb-3">
					<h6>Thursday</h6>
					<div>
						{movie?.runningTimes?.thu.map((time) => (
							<button
								onClick={() => handleReservation("thu", time)}
								className="btn btn-primary me-3 btn-sm"
							>
								{time}
							</button>
						))}
					</div>
				</div>
				<div className="mb-3">
					<h6>Friday</h6>
					<div>
						{movie?.runningTimes?.fri.map((time) => (
							<button
								onClick={() => handleReservation("fri", time)}
								className="btn btn-primary me-3 btn-sm"
							>
								{time}
							</button>
						))}
					</div>
				</div>
				<div className="mb-3">
					<h6>Saturday</h6>
					<div>
						{movie?.runningTimes?.sat.map((time) => (
							<button
								onClick={() => handleReservation("sat", time)}
								className="btn btn-primary me-3 btn-sm"
							>
								{time}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
