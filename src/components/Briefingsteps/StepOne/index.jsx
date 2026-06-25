import {
    Container,
    Form,
    DescriptionStep,
    Title,
    SubTitle,
    Label,
    ArrowRight,
    BoxButton,
    Header,
    DoubleLabel,
    FlexLabel
} from "./styles";

import Button from "../../Button";
import { ACTIONS } from "../../../briefing/actions";
import { formatPhone } from "../../../utils/masks";

function StepOne({ nextStep, state, dispatch }) {
    return (
        <Container>
            <Form>
                <Header>
                    <DescriptionStep>
                        ETAPA 1 DE 7
                    </DescriptionStep>

                    <Title>
                        Informações Gerais
                    </Title>

                    <SubTitle>
                        Vamos começar com algumas informações básicas.
                    </SubTitle>
                </Header>

                <FlexLabel>
                    <DoubleLabel>
                        Qual é o seu nome?

                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            value={state.generalInfo.name}
                            onChange={(e) =>
                                dispatch({
                                    type: ACTIONS.UPDATE_NESTED_FIELD,
                                    section: "generalInfo",
                                    field: "name",
                                    value: e.target.value,
                                })
                            }
                        />
                    </DoubleLabel>

                    <DoubleLabel>
                        Qual é o nome da sua empresa?

                        <input
                            type="text"
                            placeholder="Digite o nome da sua empresa"
                            value={state.generalInfo.company}
                            onChange={(e) =>
                                dispatch({
                                    type: ACTIONS.UPDATE_NESTED_FIELD,
                                    section: "generalInfo",
                                    field: "company",
                                    value: e.target.value,
                                })
                            }
                        />
                    </DoubleLabel>
                </FlexLabel>

                <Label>
                    Qual é o seu e-mail de contato?

                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={state.generalInfo.email}
                        onChange={(e) =>
                            dispatch({
                                type: ACTIONS.UPDATE_NESTED_FIELD,
                                section: "generalInfo",
                                field: "email",
                                value: e.target.value,
                            })
                        }
                    />
                </Label>

                <Label>
                    Qual é o seu WhatsApp?

                    <input
                        type="text"
                        placeholder="(00) 00000-0000"
                        value={state.generalInfo.whatsapp}
                        onChange={(e) =>
                            dispatch({
                                type: ACTIONS.UPDATE_NESTED_FIELD,
                                section: "generalInfo",
                                field: "whatsapp",
                                value: formatPhone(e.target.value),
                            })
                        }
                    />
                </Label>

                <BoxButton>
                    <Button
                        variant="primary"
                        type="button"
                        onClick={nextStep}
                    >
                        Próxima Etapa
                        <ArrowRight />
                    </Button>
                </BoxButton>
            </Form>
        </Container>
    );
}

export default StepOne;