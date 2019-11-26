import {createStore,applyMiddleware,compose} from "redux";
import {combineReducers} from "redux-immutable";
import thunk from "redux-thunk";

import indexReducer from "@/components/main/index/indexReducer";
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store=combineReducers({
    indexReducer
})
  
export default createStore(store,enhancer);