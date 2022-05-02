import { SET_INPUT_VALUE } from "../actions/inputActions";

const initialState = {};

export function inputReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return { ...state, [action.payload.id]: action.payload.value };
        default:
            return state;
    }
}