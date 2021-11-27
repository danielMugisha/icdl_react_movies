import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Seats = ({ data }) => {
	const navigate = useNavigate();
	const [showAlert, setShowAlert] = useState(false);
	const [alertContent, setAlertContent] = useState("");
	const { movie, totalSeats, totalCash, day, time } = data;
	const [chosenSeats, setChosenSeats] = useState([]);
	let alreadyBooked = [];

	// get earlier bookings
	const storedMovie = useSelector((state) =>
		state.movies.filter((m) => {
			return m.id === movie.id;
		})
	);
	storedMovie[0]?.bookings[day].map((b) => {
		if (b.time === time) {
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

	const saveSeat = (seat) => {
		if (chosenSeats.includes(seat)) {
			setChosenSeats(
				chosenSeats.filter((value) => {
					return value !== seat;
				})
			);
		} else if (chosenSeats.length < totalSeats) {
			setChosenSeats([...chosenSeats, seat]);
		} else if (chosenSeats >= totalSeats) {
			setAlertContent(`Seats must be ${totalSeats}`);
			setShowAlert(true);
		}
	};

	const handleProceed = () => {
		console.log(chosenSeats, totalSeats);
		if (chosenSeats.length < totalSeats) {
			setAlertContent("Every one should have a seat");
			setShowAlert(true);
		} else {
			navigate("/payment", {
				state: { movie, totalCash, chosenSeats, day, time },
			});
		}
	};

	const handleBack = () => {
		navigate(-1);
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
				<h4>Cinema-{movie.cinema + 1}</h4>
			</div>
			<div className="container w-75 text-center border mt-4">
				<h2>Screen</h2>
			</div>
			<div className="container w-75 text-center border">
				<h2>Front Row</h2>
			</div>
			<div className="container text-center">
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
				{seats.map((s) => {
					return (
						<div>
							{s.map((c) =>
								alreadyBooked.includes(c) ? (
									<button
										onClick={() => saveSeat(c)}
										className="seatButton m-2 bg-danger"
										disabled
									>
										{c}
									</button>
								) : chosenSeats.includes(c) ? (
									<button
										onClick={() => saveSeat(c)}
										className="seatButton m-2 bg-warning"
									>
										{c}
									</button>
								) : (
									<button
										onClick={() => saveSeat(c)}
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
			<div className="d-flex justify-content-around mb-3 text-center">
				<div>
					<button className="navigationButton" onClick={handleBack}>
						Back
					</button>
				</div>
				<div>
					<button className="navigationButton" onClick={handleProceed}>
						Proceed
					</button>
				</div>
			</div>
		</div>
	);
};

export default Seats;
