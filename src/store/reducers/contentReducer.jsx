import { SHOW_CONTENT, SHOW_START_SCREEN } from "../actions/contentActions";

const initialState = {
    showHomeScreen: true,
};

export function contentReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_CONTENT:
            return { ...state, showHomeScreen: false };
        case SHOW_START_SCREEN:
            return { ...state, showHomeScreen: true };
        default:
            return state;
    }
}