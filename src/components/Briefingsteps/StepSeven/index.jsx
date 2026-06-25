import {
  Container,
  Content,
  DescriptionStep,
  Title,
  SubTitle,
  ReviewSection,
  ReviewCard,
  EditLink,
  BoxButton,
  Important,
  Icon,
  Attention,
  Send,
  Pencil,
  TextImportant,
} from "./styles";

import Button from "../../Button";

function StepSeven({ goToStep, submitForm }) {
  return (
    <Container>
      <Content>
        <DescriptionStep>
          ETAPA 7 DE 7
        </DescriptionStep>

        <Title>
          Revisão e envio
        </Title>

        <SubTitle>
          Revise suas informações antes de enviar o briefing.
        </SubTitle>

        <ReviewSection>

          <ReviewCard>
            <span> <Pencil /> Informações gerais</span>
            <EditLink onClick={() => goToStep(1)}>
              Editar
            </EditLink>
          </ReviewCard>

          <ReviewCard>
            <span> <Pencil /> Sobre o projeto</span>
            <EditLink onClick={() => goToStep(2)}>
              Editar
            </EditLink>
          </ReviewCard>

          <ReviewCard>
            <span> <Pencil /> Público-alvo</span>
            <EditLink onClick={() => goToStep(3)}>
              Editar
            </EditLink>
          </ReviewCard>

          <ReviewCard>
            <span> <Pencil /> Objetivos</span>
            <EditLink onClick={() => goToStep(4)}>
              Editar
            </EditLink>
          </ReviewCard>

          <ReviewCard>
            <span> <Pencil /> Identidade visual</span>
            <EditLink onClick={() => goToStep(5)}>
              Editar
            </EditLink>
          </ReviewCard>

          <ReviewCard>
            <span> <Pencil /> Conteúdo e funcionalidades</span>
            <EditLink onClick={() => goToStep(6)}>
              Editar
            </EditLink>
          </ReviewCard>

        </ReviewSection>

        <Important>
          <Icon>
            <Attention />
          </Icon>

          <TextImportant>
            Ao enviar, você concorda que as informações fornecidas serão utilizadas exclusivamente para este projeto.
          </TextImportant>
        </Important>

        <BoxButton>


          <Button
            variant="primary"
            onClick={submitForm}
            type="button"
          >
            Enviar Briefing
            <Send />
          </Button>

        </BoxButton>

      </Content>
    </Container>
  );
}

export default StepSeven;