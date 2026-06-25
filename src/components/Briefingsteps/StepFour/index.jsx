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
    CheckboxGroup,
    CheckboxLabel,
    Checkbox
} from "./styles";

import Button from "../../Button";

function StepFour({ nextStep, prevStep, state, dispatch }) {

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            dispatch({
                type: "UPDATE_NESTED_FIELD",
                section: "objective",
                field: "secondary",
                value: [...state.objective.secondary, value],
            });
        } else {
            dispatch({
                type: "UPDATE_NESTED_FIELD",
                section: "objective",
                field: "secondary",
                value: state.objective.secondary.filter(
                    (item) => item !== value
                ),
            });
        }
    };

    const mainObjectiveOptions = [
        { value: "vendas", label: "Aumentar vendas" },
        { value: "leads", label: "Captar leads" },
        { value: "presenca-digital", label: "Fortalecer a presença digital" },
        { value: "autoridade", label: "Gerar autoridade no mercado" },
        { value: "atendimento", label: "Melhorar o atendimento ao cliente" },
        { value: "portfolio", label: "Apresentar produtos ou serviços" },
    ];

    const secondaryOptions = [
        "Melhorar posicionamento no Google",
        "Receber contatos pelo WhatsApp",
        "Gerar mais orçamentos",
        "Aumentar credibilidade",
        "Divulgar produtos e serviços",
    ];

    return (
        <Container>
            <Form>

                <DescriptionStep>
                    ETAPA 4 DE 7
                </DescriptionStep>

                <Title>
                    Objetivos
                </Title>

                <SubTitle>
                    Conte-nos os principais objetivos deste projeto
                </SubTitle>

                <Label>
                    Qual é o principal objetivo do projeto?
                </Label>

                <CustomSelect
                    classNamePrefix="react-select"
                    options={mainObjectiveOptions}
                    value={state.objective.primary}
                    onChange={(selectedOption) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "objective",
                            field: "primary",
                            value: selectedOption,
                        })
                    }
                    placeholder="Selecione uma opção"
                />

                <Label>
                    Quais são os objetivos secundários?
                </Label>

                <CheckboxGroup>
                    {secondaryOptions.map((option) => (
                        <CheckboxLabel key={option}>
                            <Checkbox
                                value={option}
                                checked={state.objective.secondary.includes(option)}
                                onChange={handleCheckboxChange}
                            />
                            {option}
                        </CheckboxLabel>
                    ))}
                </CheckboxGroup>

                <Label>
                    Existe algum outro objetivo que gostaria de informar?
                </Label>

                <TextArea
                    placeholder="Descreva outros objetivos ou observações relevantes (opcional)"
                    value={state.objective.text}
                    onChange={(e) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "objective",
                            field: "text",
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

export default StepFour;