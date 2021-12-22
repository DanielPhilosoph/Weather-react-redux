import { createStore } from "@reduxjs/toolkit";
import { MainReducer } from "../reducers/MainReducer";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";

const store = compose(applyMiddleware(thunk))(createStore)(MainReducer);

export default store;
