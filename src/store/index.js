import { createStore, combineReducers } from "redux";
import { inputReducer } from "./reducers/inputReducer";



const rootReducer = combineReducers({
    input: inputReducer,
});

export const store = createStore(rootReducer);