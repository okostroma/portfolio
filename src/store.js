import { reducer as formReducer } from 'redux-form';
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    form: formReducer
})

const store = createStore(reducers);

export default store;