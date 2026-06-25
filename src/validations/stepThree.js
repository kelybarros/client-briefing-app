export const validateStepThree = (state) => {
    const { audience, age, interest } = state.audienceInfo;

    if (!audience?.trim()) {
        return "Descreva seu público ideal";
    }

    if (!age?.length) {
        return "Selecione a faixa etária do seu público.";
    }

    if (!interest?.trim()) {
        return "Descreva os principais interesses do seu público.";
    }

    return null;
};