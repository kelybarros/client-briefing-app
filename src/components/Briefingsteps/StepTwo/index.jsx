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


function StepTwo({ prevStep, nextStep, state, dispatch }) {

  const options = [
    { value: "site", label: "Site" },
    { value: "landing-page", label: "Landing Page" },
    { value: "lojavirtual", label: "Loja Virtual" },
    { value: "sistema", label: "Sistema Web" },
    { value: "aplicativo", label: "Aplicativo Web" }
  ];

  const optionsPresence = [
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "tiktok", label: "TikTok" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "whatsapp", label: "WhatsApp Business" },
    { value: "google", label: "Google Meu Negócio" },
    { value: "site", label: "Site" },
    { value: "ecommerce", label: "Loja Virtual" },
  ];

  return (
    <Container>

      <Form>

        <DescriptionStep>
          ETAPA 2 DE 7
        </DescriptionStep>

        <Title>
          Sobre o projeto
        </Title>

        <SubTitle>
          Conte-nos mais sobre o seu projeto atual.
        </SubTitle>

        <Label>
          Qual tipo de projeto você deseja desenvolver?
        </Label>

        <CustomSelect
          classNamePrefix="react-select"
          options={options}
          value={state.aboutProject.type}
          onChange={(selectedOption) =>
            dispatch({
              type: "UPDATE_NESTED_FIELD",
              section: "aboutProject",
              field: "type",
              value: selectedOption,
            })
          }
          placeholder="Selecione uma opção"
        />

        <Label>
          Você já possui site ou presença digital?
        </Label>
        <CustomSelect
          classNamePrefix="react-select"
          isMulti
          options={optionsPresence}
          value={state.aboutProject.presence}
          onChange={(selectedOptions) =>
            dispatch({
              type: "UPDATE_NESTED_FIELD",
              section: "aboutProject",
              field: "presence",
              value: selectedOptions,
            })
          }
          placeholder="Selecione todas as opções que já possui"
        />

        <Label>
          Quais são os principais serviços ou produtos oferecidos?
        </Label>

        <TextArea
          placeholder="Ex.: Conte o que sua empresa faz ou vende (ex.: produtos físicos, serviços, atendimento ao público, etc.)."
          value={state.aboutProject.text}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_NESTED_FIELD",
              section: "aboutProject",
              field: "text",
              value: e.target.value,
            })
          }
        />

        <BoxButton>
          <Button variant="secondary" onClick={prevStep} type="button">
            <ArrowLeft />
            Etapa Anterior
          </Button>

          <Button variant="primary" onClick={nextStep} type="button">
            Próxima Etapa
            <ArrowRight />
          </Button>
        </BoxButton>

      </Form>

    </Container>
  );
}

export default StepTwo;