import React, { useEffect } from "react";
import HomePage from "./pages/user/homePage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./pages/user/bookingPage";
import PaymentDetails from "./pages/user/paymentDetails";
import MovieDetails from "./pages/user/movieDetails";
import SeatBooking from "./pages/user/seatBooking";
import { fetchMovies } from "./redux/actions/movieActions";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const App = ({ fetchMovies }) => {
	useEffect(() => {
		fetchMovies();
	}, []);
	return (
		<div className="container">
			<Router>
				<Navbar />

				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="booking" element={<BookingPage />} />
					<Route path="payment" element={<PaymentDetails />} />
					<Route path="movie/:id" element={<MovieDetails />} />
					<Route path="seat" element={<SeatBooking />} />
				</Routes>
			</Router>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchMovies: () => dispatch(fetchMovies()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
