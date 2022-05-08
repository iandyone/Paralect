import { SET_INPUT_VALUE, SET_REQUEST_VALUE } from "../actions/inputActions";

const initialState = {
    request: "",
};

export function inputReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return { ...state, [action.payload.id]: action.payload.value };
        case SET_REQUEST_VALUE:
            return { ...state, request: action.payload };
        default:
            return state;
    }
}