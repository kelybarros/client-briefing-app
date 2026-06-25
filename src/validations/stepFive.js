export const validateStepFive = (state) => {
    const { options, colors } = state.visualIdentity;

    if (!options?.value) {
        return "Selecione uma opção de identidade visual para continuar";
    }

    if (!colors?.trim()) {
        return "Mencione as cores que representam sua marca.";
    }

    return null;
};