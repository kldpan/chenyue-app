import {createStore,applyMiddleware} from "redux";
import {combineReducers} from "redux-immutable";
import thunk from "redux-thunk";

import indexReducer from "@/components/main/index/indexReducer";

const store=combineReducers({
    indexReducer
})

export default createStore(store,applyMiddleware(thunk));