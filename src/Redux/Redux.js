import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import LangReducer from "./LangReducer";


let reducers = combineReducers({
    LangReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;