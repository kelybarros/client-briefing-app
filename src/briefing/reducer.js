import { ACTIONS } from "./actions";
import { initialState } from "./initialState";

export function reducer(state, action) {
  switch (action.type) {

    case ACTIONS.SET_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };

    case ACTIONS.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };

    case ACTIONS.UPDATE_NESTED_FIELD:
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value,
        },
      };

    case ACTIONS.RESET_FORM:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}