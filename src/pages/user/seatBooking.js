import React from "react";
import { useLocation } from "react-router";
import Seats from "../../components/Seats";
const SeatBooking = () => {
	const location = useLocation();
	const data = location.state;
	return (
		<>
			<Seats data={data} />
		</>
	);
};

export default SeatBooking;
