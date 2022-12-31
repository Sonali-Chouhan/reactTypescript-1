// import { legacy_createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'
// import rootReducer from "./Reducer/index";
// export const store = legacy_createStore(rootReducer,(applyMiddleware(thunk)));
import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {rootReducer} from "./Reducer/index";
export const store = legacy_createStore(rootReducer,(applyMiddleware(thunk)));
