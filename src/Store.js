import { UserReducer } from "./Reducer/UserReducer"
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';


const initialState ={
    users:[],
}

const reducer = combineReducers({
        users: UserReducer,
})

const composDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composDevTools(applyMiddleware(thunk)));

export default store;



