import { SHOW_USER_DATA } from "../actions/contentActions";

const initialState = {
    showHomeScreen: true,
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_USER_DATA:
            return { ...state, showHomeScreen: false };
        default:
            return state;
    }
}