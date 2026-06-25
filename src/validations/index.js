import { validateStepOne } from "./stepOne";
import { validateStepTwo } from "./stepTwo";
import { validateStepThree } from "./stepThree";
import { validateStepFour } from "./stepFour";
import { validateStepFive } from "./stepFive";
import { validateStepSix } from "./stepSix";

export function validateStep(step, state) {
  switch (step) {
    case 1:
      return validateStepOne(state);

    case 2:
      return validateStepTwo(state);

    case 3:
      return validateStepThree(state);

    case 4:
      return validateStepFour(state);

    case 5:
      return validateStepFive(state);

    case 6:
      return validateStepSix(state);

    default:
      return null;
  }
}