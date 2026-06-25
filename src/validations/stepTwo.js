export const validateStepTwo = (state) => {
  const { type, presence, text } = state.aboutProject;

  if (!type?.value) {
    return "Selecione o tipo de projeto";
  }

  if (!presence?.length) {
    return "Selecione pelo menos uma presença digital";
  }

  if (!text?.trim()) {
    return "Descreva os serviços ou produtos oferecidos";
  }

  return null;
};