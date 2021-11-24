import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMoviesSuccess } from "../redux/actions/movieActions";
import { useNavigate } from "react-router";

const Payment = ({ data }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showAlert, setShowAlert] = useState(false);
	const [alertContent, setAlertContent] = useState("");
	const [names, setNames] = useState("");
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");
	const { movie, totalCash, chosenSeats, day, time } = data;
	const { movies } = useSelector((state) => state);

	const handleSubmit = (e) => {
		e.preventDefault();
		movie.bookings[day].forEach((b) => {
			if (b.time === time) {
				b.booked = [...b.booked, ...chosenSeats];
			}
		});
		const index = movies.findIndex((m) => m.id === movie.id);
		movies[index] = movie;
		if (!names || !email || !confirmEmail) {
			setAlertContent("Fill in all the fields");
			setShowAlert(true);
		} else if (email !== confirmEmail) {
			setAlertContent("emails should match");
			setShowAlert(true);
		} else {
			dispatch(fetchMoviesSuccess(movies));
			navigate("/");
		}
	};

	const handleChangeNames = (e) => {
		setNames(e.target.value);
	};
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleChangeConfirmEmail = (e) => {
		setConfirmEmail(e.target.value);
	};
	return (
		<div>
			<div className="border-top border-bottom">
				<h2>{movie.title}</h2>
				<h4>
					{day === "mon"
						? "Monday"
						: day === "tue"
						? "Tuesday"
						: day === "wed"
						? "Wednesday"
						: day === "thu"
						? "Thursday"
						: day === "fri"
						? "Friday"
						: day === "sat"
						? "Saturday"
						: day === "sun"
						? "Sunday"
						: ""}{" "}
					{time}
				</h4>
				<h5>${totalCash}</h5>
				Seats:{" "}
				{chosenSeats.map((seat) => (
					<button className="m-2 p-2 bg-success">{seat} </button>
				))}
			</div>
			<div className="container w-50 mt-5">
				{showAlert ? (
					<div
						class="alert alert-warning alert-dismissible fade show"
						role="alert"
					>
						{alertContent}
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="alert"
							aria-label="Close"
							onClick={() => setShowAlert(false)}
						></button>
					</div>
				) : (
					""
				)}
				<form>
					<div className="mb-3">
						<label for="name" className="form-label">
							Full Names
						</label>
						<input
							type="text"
							value={names}
							className="form-control"
							id="name"
							name="names"
							onChange={handleChangeNames}
						/>
					</div>
					<div className="mb-3">
						<label for="email" className="form-label">
							Email address
						</label>
						<input
							type="email"
							value={email}
							className="form-control"
							id="email"
							name="email"
							onChange={handleChangeEmail}
						/>
					</div>
					<div className="mb-3">
						<label for="email2" className="form-label">
							Confirm Email address
						</label>
						<input
							type="email"
							value={confirmEmail}
							className="form-control"
							id="email"
							name="c_email"
							onChange={handleChangeConfirmEmail}
						/>
					</div>

					<button onClick={handleSubmit} type="submit" class="btn btn-primary">
						Book Reservation
					</button>
				</form>
			</div>
		</div>
	);
};

export default Payment;
