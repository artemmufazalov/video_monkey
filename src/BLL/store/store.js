import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";

import {cartReducer, profileReducer} from "../reducers";

let reducers = combineReducers(
    {
        userProfile: profileReducer,
        cart: cartReducer,
    }
)

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;

window._store = store;