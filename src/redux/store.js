import { createStore, applyMiddleware } from "redux";
import movieReducer from "./reducers/movieReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
	movieReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
