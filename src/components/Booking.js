import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Booking = ({ data }) => {
	const navigate = useNavigate();
	const { movie, day, time } = data;
	const [showAlert, setShowAlert] = useState(false);
	const [alertContent, setAlertContent] = useState("");
	const [adultTickets, setAdultsTickets] = useState(0);
	const [childTickets, setChildTickets] = useState(0);
	const [familyTickets, setFamilyTickets] = useState(0);
	const [studentTickets, setStudentTickets] = useState(0);
	const [seniorTickets, setSeniorTickets] = useState(0);

	const [totalCash, setTotalCash] = useState(
		adultTickets * 8.8 +
			childTickets * 7.5 +
			familyTickets * 30.0 +
			studentTickets * 7.5 +
			seniorTickets * 7.5
	); // total cash = total seats each multiplied by its price/ticket

	const [totalSeats, setTotalSeats] = useState(
		adultTickets +
			childTickets +
			familyTickets * 4 +
			studentTickets +
			seniorTickets
	);

	const handleProceed = () => {
		if (totalCash !== 0.0) {
			navigate("/seat", { state: { movie, totalCash, totalSeats, day, time } });
		} else {
			setAlertContent("Enter at least on ticket to continue");
			setShowAlert(true);
		}
	};

	const handleBack = () => {
		navigate(-1);
	};

	//on every change on any ticket type we update totals
	useEffect(() => {
		setTotalSeats(
			adultTickets +
				childTickets +
				familyTickets * 4 +
				studentTickets +
				seniorTickets
		);
		setTotalCash(
			adultTickets * 8.8 +
				childTickets * 7.5 +
				familyTickets * 30.0 +
				studentTickets * 7.5 +
				seniorTickets * 7.5
		);
	}, [
		adultTickets,
		childTickets,
		familyTickets,
		studentTickets,
		seniorTickets,
	]);
	return (
		<div className="container">
			<div className="border-top border-bottom">
				<h2>{movie.title}</h2>
			</div>
			<div className="mt-2 border-top border-bottom">
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
			</div>
			<div className="m-4 position-relative">
				<h5>Tickets Only</h5>
				<div>
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
					<div className="d-flex justify-content-between border-bottom mb-3">
						<div>
							<h3>ADULTS</h3>
							<h4>Price: $8.80</h4>
						</div>
						<div className="d-flex">
							<div className="number border me-2 d-flex justify-content-center align-items-center">
								<h3>{adultTickets}</h3>
							</div>
							<div className="d-flex flex-column">
								<button onClick={() => setAdultsTickets(adultTickets + 1)}>
									+
								</button>
								<button
									onClick={() => {
										if (adultTickets > 0) {
											setAdultsTickets(adultTickets - 1);
										}
									}}
								>
									-
								</button>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between border-bottom mb-3">
						<div>
							<h3>CHILD (14YRS AND UNDER)</h3>
							<h4>Price: $7.50</h4>
						</div>
						<div className="d-flex">
							<div className="number border me-2 d-flex justify-content-center align-items-center">
								<h3>{childTickets}</h3>
							</div>
							<div className="d-flex flex-column">
								<button onClick={() => setChildTickets(childTickets + 1)}>
									+
								</button>
								<button
									onClick={() => {
										if (childTickets > 0) {
											setChildTickets(childTickets - 1);
										}
									}}
								>
									-
								</button>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between border-bottom mb-3">
						<div>
							<h3>FAMILY X4(2AD AND 2CH OR 1AD AND 3CH)</h3>
							<h4>Price: $30.00</h4>
						</div>
						<div className="d-flex">
							<div className="number border me-2 d-flex justify-content-center align-items-center">
								<h3>{familyTickets}</h3>
							</div>
							<div className="d-flex flex-column">
								<button onClick={() => setFamilyTickets(familyTickets + 1)}>
									+
								</button>
								<button
									onClick={() => {
										if (familyTickets > 0) {
											setFamilyTickets(familyTickets - 1);
										}
									}}
								>
									-
								</button>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between border-bottom mb-3">
						<div>
							<h3>STUDENT</h3>
							<h4>Price: $7.50</h4>
						</div>
						<div className="d-flex">
							<div className="number border me-2 d-flex justify-content-center align-items-center">
								<h3>{studentTickets}</h3>
							</div>
							<div className="d-flex flex-column">
								<button onClick={() => setStudentTickets(studentTickets + 1)}>
									+
								</button>
								<button
									onClick={() => {
										if (studentTickets > 0) {
											setStudentTickets(studentTickets - 1);
										}
									}}
								>
									-
								</button>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-between border-bottom mb-3">
						<div>
							<h3>SENIOR</h3>
							<h4>Price: $7.50</h4>
						</div>
						<div className="d-flex">
							<div className="number border me-2 d-flex justify-content-center align-items-center">
								<h3>{seniorTickets}</h3>
							</div>
							<div className="d-flex flex-column">
								<button onClick={() => setSeniorTickets(seniorTickets + 1)}>
									+
								</button>
								<button
									onClick={() => {
										if (seniorTickets > 0) {
											setSeniorTickets(seniorTickets - 1);
										}
									}}
								>
									-
								</button>
							</div>
						</div>
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
			</div>
		</div>
	);
};

export default Booking;
