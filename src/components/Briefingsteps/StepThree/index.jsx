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
    TextArea
} from "./styles";

import Button from "../../Button";

function StepThree({ prevStep, nextStep, state, dispatch }) {

    const options = [
        { value: "0-12", label: "Infantil (0–12 anos)" },
        { value: "13-17", label: "Adolescentes (13–17 anos)" },
        { value: "18-24", label: "Jovens (18–24 anos)" },
        { value: "25-34", label: "Jovens adultos (25–34 anos)" },
        { value: "35-44", label: "Adultos (35–44 anos)" },
        { value: "45-59", label: "Adultos maduros (45–59 anos)" },
        { value: "60+", label: "60+ anos" }
    ];

    return (
        <Container>
            <Form>

                <DescriptionStep>
                    ETAPA 3 DE 7
                </DescriptionStep>

                <Title>
                    Público-Alvo
                </Title>

                <SubTitle>
                    Vamos entender melhor quem é o seu público.
                </SubTitle>

                <Label>
                    Quem é o seu público ideal?
                </Label>

                <TextArea
                    placeholder="Ex.: Mulheres de 25 a 45 anos interessadas em moda feminina."
                    value={state.audienceInfo.audience}
                    onChange={(e) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "audienceInfo",
                            field: "audience",
                            value: e.target.value,
                        })
                    }
                />

                <Label>
                    Qual é a faixa etária predominante do seu público?
                </Label>

                <CustomSelect
                    classNamePrefix="react-select"
                    isMulti
                    options={options}
                    value={state.audienceInfo.age}
                    onChange={(selectedOption) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "audienceInfo",
                            field: "age",
                            value: selectedOption,
                        })
                    }
                    placeholder="Selecione uma opção"
                />

                <Label>
                    Quais são os principais interesses do seu público?
                </Label>

                <TextArea
                    placeholder="Ex.: Moda, saúde, esportes, tecnologia, viagens, investimentos..."
                    value={state.audienceInfo.interest}
                    onChange={(e) =>
                        dispatch({
                            type: "UPDATE_NESTED_FIELD",
                            section: "audienceInfo",
                            field: "interest",
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

export default StepThree;