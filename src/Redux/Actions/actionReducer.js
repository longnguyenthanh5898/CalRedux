import { CAL_ANSWER, CAL_BUTTON, CAL_BACKSPACE, CAL_CLEAR } from "./actionType";

let initialState = {
  num: "",
  ans: "",
};
export const calReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CAL_BUTTON:
      return {
        ...state,
        ...payload,
        num: state.num.concat(action.payload),
      };

    case CAL_ANSWER:
      try {
        return {
          ...state,
          ...payload,
          ans: eval(state.num).toString(),
        };
      } catch {
        return {
          ...state,
          ...payload,
          ans: "error",
        };
      }
    case CAL_BACKSPACE:
      return {
        ...state,
        ...payload,
        num: state.num.slice(0, -1),
        ans: "",
      };
    case CAL_CLEAR:
      return {
        ...state,
        ...payload,
        num: "",
        ans: "",
      };
    default:
      return state;
  }
};
export const CAL_KEY = "calStore";
