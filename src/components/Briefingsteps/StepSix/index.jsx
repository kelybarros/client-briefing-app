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
  RadioInput,
  Important,
  Attention,
  Icon,
} from "./styles";

import Button from "../../Button";

function StepSix({ nextStep, prevStep, state, dispatch }) {
  const options = [
    {
      value: "cliente",
      label: "Nós forneceremos todos os textos",
    },
    {
      value: "agencia",
      label: "Gostaríamos que vocês criassem os textos",
    },
    {
      value: "parcial",
      label: "Forneceremos parte dos textos",
    },
  ];

  return (
    <Container>
      <Form>
        <DescriptionStep>ETAPA 6 DE 7</DescriptionStep>

        <Title>Conteúdo e Funcionalidades</Title>

        <SubTitle>
          Conte-nos quais recursos e conteúdos serão necessários para o seu projeto.
        </SubTitle>

        <Label>Quais páginas ou seções seu site deve ter?</Label>

        <TextArea
          placeholder="Ex.: Página Inicial, Quem Somos, Serviços, Produtos, Galeria de Fotos, Blog, Contato, Área do Cliente ou qualquer outra página que você considere importante."
          value={state.features.pages}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_NESTED_FIELD",
              section: "features",
              field: "pages",
              value: e.target.value,
            })
          }
        />

        <Label>Quais funcionalidades são importantes?</Label>

        <TextArea
          placeholder="Ex.: formulário de contato, integração com WhatsApp, área do cliente, blog..."
          value={state.features.important}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_NESTED_FIELD",
              section: "features",
              field: "important",
              value: e.target.value,
            })
          }
        />

        <Label>Quem será responsável pela criação dos textos?</Label>

        <CustomSelect
          classNamePrefix="react-select"
          options={options}
          value={state.features.textCreator}
          onChange={(selectedOption) =>
            dispatch({
              type: "UPDATE_NESTED_FIELD",
              section: "features",
              field: "textCreator",
              value: selectedOption,
            })
          }
          placeholder="Selecione uma opção"
        />

        <Label>Como você prefere enviar os materiais (imagens, vídeos e textos)?</Label>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "10px",
          }}
        >

          <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <RadioInput
              name="materialDelivery"
              value="whatsapp"
              checked={state.features.materialDelivery === "whatsapp"}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_NESTED_FIELD",
                  section: "features",
                  field: "materialDelivery",
                  value: e.target.value,
                })
              }
            />
            WhatsApp
          </label>

          <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <RadioInput
              name="materialDelivery"
              value="google-drive"
              checked={state.features.materialDelivery === "google-drive"}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_NESTED_FIELD",
                  section: "features",
                  field: "materialDelivery",
                  value: e.target.value,
                })
              }
            />
            Google Drive
          </label>

          <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <RadioInput
              name="materialDelivery"
              value="email"
              checked={state.features.materialDelivery === "email"}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_NESTED_FIELD",
                  section: "features",
                  field: "materialDelivery",
                  value: e.target.value,
                })
              }
            />
            E-mail
          </label>
        </div>

        <Important>
          <Icon>
            <Attention />
          </Icon>

          Após o envio do formulário, entraremos em contato para solicitar os materiais conforme a opção escolhida.
        </Important>

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

export default StepSix;