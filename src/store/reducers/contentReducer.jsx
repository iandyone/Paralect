import { SHOW_CONTENT } from "../actions/contentActions";

const initialState = {
    showHomeScreen: true,
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_CONTENT:
            return { ...state, showHomeScreen: false };
        default:
            return state;
    }
}