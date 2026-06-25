export const validateStepFour = (state) => {
  const { primary, secondary } = state.objective;

  if (!primary?.value) {
    return "Selecione o objetivo do projeto";
  }

  if (!secondary?.length) {
    return "Selecione pelo menos um objetivo secundário";
  }

  return null;
};