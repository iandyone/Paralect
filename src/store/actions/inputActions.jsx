export const SET_INPUT_VALUE = "SET_INPUT_VALUE";
export const SET_REQUEST_VALUE = "SET_REQUEST_VALUE";
export const RESET_INPUT = "RESET_INPUT";

export const setInputValueAction = (payload) => ({ type: SET_INPUT_VALUE, payload });
export const setRequestValueAction = (payload) => ({ type: SET_REQUEST_VALUE, payload });
export const resetInputAction = (payload) => ({ type: RESET_INPUT, payload });