import { CAL_ANSWER, CAL_BUTTON, CAL_BACKSPACE, CAL_CLEAR } from "./actionType";

export const calButton = (number) => {
  return {
    type: CAL_BUTTON,
    payload: number,
  };
};

export const calAnswer = (number) => {
  return {
    type: CAL_ANSWER,
    payload: number,
  };
};
export const calBackSpace = (number) => {
  return {
    type: CAL_BACKSPACE,
    payload: number,
  };
};

export const calClear = (number) => {
  return {
    type: CAL_CLEAR,
    payload: number,
  };
};
