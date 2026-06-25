export const validateStepSix = (state) => {
    const { textCreator, materialDelivery } = state.features;

    if (!textCreator?.value) {
        return "Selecione o responsável pela criação dos textos";
    }

    if (!materialDelivery) {
        return "Selecione preferência de envio dos materiais";
    }

    return null;
};