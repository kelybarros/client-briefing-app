import {
    Container,
    Form,
    Label,
    CustomSelect,
    DescriptionStep,
    Title,
    SubTitle,
    BoxButton,
    ArrowLeft,
    ArrowRight,
    TextArea,
} from "./styles";

import Button from "../../Button";

function StepFive({ nextStep, prevStep, state, dispatch }) {

    const options = [
        { value: "sim", label: "Sim, possuo identidade visual" },
        { value: "nao", label: "Não possuo identidade visual" },
        { value: "naosabe", label: "Não tenho certeza" }
    ];

    return (
        <Container>
            <Form>

                <DescriptionStep>
                    ETAPA 5 DE 7
                </DescriptionStep>

                <Title>
                    Identidade Visual
                </Title>

                <SubTitle>
                    Conte-nos sobre a identidade visual desejada.
                </SubTitle>

                <Label>
                    Sua empresa já possui identidade visual definida?
                </Label>

                <CustomSelect
                    classNamePrefix="react-select"
                    options={options}
                    value={state.visualIdentity.options}
                    onChange={(selectedOption) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "visualIdentity",
                            field: "options",
                            value: selectedOption,
                        })
                    }
                    placeholder="Selecione uma opção"
                />

                <Label>
                    Quais cores representam melhor sua marca?
                </Label>

                <TextArea
                    placeholder="Ex.: azul, preto e branco, tons terrosos, verde escuro..."
                    value={state.visualIdentity.colors}
                    onChange={(e) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "visualIdentity",
                            field: "colors",
                            value: e.target.value,
                        })
                    }
                />


                <Label>
                    Você possui alguma referência de estilo ou site que goste?
                </Label>

                <TextArea
                    placeholder="Cole links de referências, Instagram, Pinterest, sites ou descreva estilos que você admira. Ex: https://apple.com, https://pinterest.com/...
"
                    value={state.visualIdentity.reference}
                    onChange={(e) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "visualIdentity",
                            field: "reference",
                            value: e.target.value,
                        })
                    }
                />


                <Label>
                    Há algo que você não gosta?
                </Label>

                <TextArea
                    placeholder="Ex.: cores vibrantes, excesso de animações, etc."
                    value={state.visualIdentity.avoid}
                    onChange={(e) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "visualIdentity",
                            field: "avoid",
                            value: e.target.value,
                        })
                    }
                />

                <BoxButton>
                    <Button
                        variant="secondary"
                        onClick={prevStep}
                        type="button"
                    >
                        <ArrowLeft />
                        Etapa Anterior
                    </Button>

                    <Button
                        variant="primary"
                        onClick={nextStep}
                        type="button"
                    >
                        Próxima Etapa
                        <ArrowRight />
                    </Button>
                </BoxButton>

            </Form>
        </Container>
    );
}

export default StepFive;