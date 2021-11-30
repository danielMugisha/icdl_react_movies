import {
	FETCH_MOVIES_REQUEST,
	FETCH_MOVIES_FAILURE,
	FETCH_MOVIES_SUCCESS,
} from "../actionTypes";
const initialState = {
	loading: false,
	movies: [],
	error: "",
	selectedMovie: {},
};

const movieReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_MOVIES_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_MOVIES_SUCCESS:
			return {
				loading: false,
				movies: payload,
				error: "",
				selectedMovie: {},
			};
		case FETCH_MOVIES_FAILURE:
			return {
				loading: false,
				movies: [],
				error: payload,
				selectedMovie: {},
			};
		default:
			return state;
	}
};

export default movieReducer;
