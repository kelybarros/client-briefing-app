import { useReducer, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";

import { reducer } from "../../briefing/reducer";
import { initialState } from "../../briefing/initialState";
import { ACTIONS } from "../../briefing/actions";

import { validateStep } from "../../validations";
import { sendBriefingEmail } from "../../services/emailService";

import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

import {
  formatSelectValue,
  formatMultiSelect,
  formatArray,
} from "../../utils/formatters";

import StepOne from "../../components/Briefingsteps/StepOne";
import StepTwo from "../../components/Briefingsteps/StepTwo";
import StepThree from "../../components/Briefingsteps/StepThree";
import StepFour from "../../components/Briefingsteps/StepFour";
import StepFive from "../../components/Briefingsteps/StepFive";
import StepSix from "../../components/Briefingsteps/StepSix";
import StepSeven from "../../components/Briefingsteps/StepSeven";

import StepEight from "../../components/Briefingsteps/StepEight";

function Briefing() {

  const loadState = () => {
    const saved = localStorage.getItem("briefing-state");
    return saved ? JSON.parse(saved) : initialState;
  };

  const [state, dispatch] = useReducer(reducer, loadState());

  const totalSteps = 7;

  useEffect(() => {
    localStorage.setItem("briefing-state", JSON.stringify(state));
  }, [state]);

  const nextStep = () => {
    const error = validateStep(state.currentStep, state);

    if (error) {
      alert(error);
      return;
    }

    if (state.currentStep < totalSteps) {
      dispatch({
        type: ACTIONS.SET_STEP,
        payload: state.currentStep + 1,
      });
    }
  };

  const prevStep = () => {
    if (state.currentStep > 1) {
      dispatch({
        type: ACTIONS.SET_STEP,
        payload: state.currentStep - 1,
      });
    }
  };

  const goToStep = (step) => {
    if (step > state.currentStep) {
      for (let i = 1; i < step; i++) {
        const error = validateStep(i, state);

        if (error) {
          alert(`Etapa ${i} precisa ser preenchida antes.`);
          return;
        }
      }
    }

    dispatch({
      type: ACTIONS.SET_STEP,
      payload: step,
    });
  };

  const restartForm = () => {
    localStorage.removeItem("briefing-state");

    dispatch({ type: ACTIONS.RESET_FORM });
  };

  const submitForm = async () => {
    const error = validateStep(6, state);

    if (error) {
      alert(error);
      return;
    }

    const templateParams = {
      name: state.generalInfo.name,
      company: state.generalInfo.company,
      email: state.generalInfo.email,
      whatsapp: state.generalInfo.whatsapp,

      projectType: formatSelectValue(state.aboutProject.type),
      presence: formatMultiSelect(state.aboutProject.presence),

      audience: state.audienceInfo.audience,
      age: formatSelectValue(state.audienceInfo.age),
      interests: state.audienceInfo.interest,

      objective: formatSelectValue(state.objective.primary),
      secondaryObjectives: formatArray(state.objective.secondary),
      objectiveText: state.objective.text,

      identityStatus: formatSelectValue(state.visualIdentity.options),
      colors: state.visualIdentity.colors,
      reference: state.visualIdentity.reference,
      avoid: state.visualIdentity.avoid,

      pages: state.features.pages,
      features: state.features.important,
      textCreator: formatSelectValue(state.features.textCreator),
      materialDelivery: state.features.materialDelivery,
    };

    try {
      await sendBriefingEmail(templateParams);

      dispatch({
        type: ACTIONS.SET_STATUS,
        payload: "success",
      });

    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar o briefing.");
    }
  };

  return (
    <>

      {state.status === "form" && (
        <>
          <ProgressBar
            currentStep={state.currentStep}
            totalSteps={totalSteps}
            goToStep={goToStep}
          />

          {state.currentStep === 1 && (
            <StepOne nextStep={nextStep} state={state} dispatch={dispatch} />
          )}

          {state.currentStep === 2 && (
            <StepTwo nextStep={nextStep} prevStep={prevStep} state={state} dispatch={dispatch} />
          )}

          {state.currentStep === 3 && (
            <StepThree nextStep={nextStep} prevStep={prevStep} state={state} dispatch={dispatch} />
          )}

          {state.currentStep === 4 && (
            <StepFour nextStep={nextStep} prevStep={prevStep} state={state} dispatch={dispatch} />
          )}

          {state.currentStep === 5 && (
            <StepFive nextStep={nextStep} prevStep={prevStep} state={state} dispatch={dispatch} />
          )}

          {state.currentStep === 6 && (
            <StepSix nextStep={nextStep} prevStep={prevStep} state={state} dispatch={dispatch} />
          )}

          {state.currentStep === 7 && (
            <StepSeven
              prevStep={prevStep}
              goToStep={goToStep}
              state={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          )}
        </>
      )}

      {state.status === "success" && (
        <StepEight restartForm={restartForm}
        state={state} />
      )}

      <Footer />
      <WhatsAppButton />

    </>
  );
}

export default Briefing;