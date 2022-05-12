import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { inputReducer } from "./reducers/inputReducer";
import { userReducer } from "./reducers/userReducer";
import { contentReducer } from "./reducers/contentReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { paginationReducer } from "./reducers/paginationReducer";

const rootReducer = combineReducers({
    input: inputReducer,
    user: userReducer,
    content: contentReducer,
    pagination: paginationReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));