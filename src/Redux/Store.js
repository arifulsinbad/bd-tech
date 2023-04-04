import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterCart from "./counterCart";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(counterCart, thunk, logger)))