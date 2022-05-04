import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { inputReducer } from "./reducers/inputReducer";
import { userReducer } from "./reducers/userReducer";
import { contentReducer } from "./reducers/contentReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    input: inputReducer,
    user: userReducer,
    content: contentReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));