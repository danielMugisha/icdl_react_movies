import React from "react";
import { useLocation } from "react-router";
import Payment from "../../components/Payment";

const PaymentDetails = () => {
	const location = useLocation();
	const data = location.state;
	return (
		<>
			<Payment data={data} />
		</>
	);
};

export default PaymentDetails;
