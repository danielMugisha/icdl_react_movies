import React from "react";
import { useLocation } from "react-router";
import Booking from "../../components/Booking";

const BookingPage = () => {
	const location = useLocation();
	const data = location.state;
	return (
		<>
			<Booking data={data} />
		</>
	);
};

export default BookingPage;
