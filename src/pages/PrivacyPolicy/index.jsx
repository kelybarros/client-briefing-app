import {
  Container,
  Content,
  Title,
  UpdateDate,
  Section,
  SectionTitle,
  Text,
  List,
  ContactBox,
  Button,
  ArrowLeft,
} from "./styles";

import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
    <Container>

      <Content>
        <Title>Política de Privacidade</Title>

        <UpdateDate>
          Última atualização: 25 de junho de 2026
        </UpdateDate>

        <Section>
          <Text>
            Esta Política de Privacidade descreve como as informações enviadas através do formulário de briefing são coletadas, utilizadas e protegidas.
          </Text>
        </Section>

        <Section>
          <SectionTitle>1. Coleta de informações</SectionTitle>

          <Text>
            Ao preencher o formulário de briefing, podem ser coletadas as seguintes informações:
          </Text>

          <List>
            <li>Nome;</li>
            <li>E-mail;</li>
            <li>Número de WhatsApp;</li>
            <li>Informações sobre o projeto e preferências enviadas no formulário.</li>
          </List>

          <Text>
            Essas informações são fornecidas diretamente pelo usuário de forma voluntária.
          </Text>
        </Section>

        <Section>
          <SectionTitle>2. Finalidade do uso dos dados</SectionTitle>

          <Text>
            Os dados coletados são utilizados exclusivamente para:
          </Text>

          <List>
            <li>Entrar em contato com o cliente;</li>
            <li>Entender as necessidades do projeto;</li>
            <li>Elaborar propostas e orçamentos;</li>
            <li>Dar continuidade ao atendimento via WhatsApp ou e-mail.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Envio das informações</SectionTitle>

          <Text>
            O envio do formulário é realizado através do serviço EmailJS, que encaminha as informações diretamente para o e-mail responsável pelo atendimento.
          </Text>

          <Text>
            Além disso, o contato pode ser realizado posteriormente via WhatsApp, caso necessário para alinhamento do projeto.
          </Text>
        </Section>

        <Section>
          <SectionTitle>4. Compartilhamento de dados</SectionTitle>

          <Text>
            Os dados fornecidos não são vendidos, alugados ou compartilhados com terceiros para fins comerciais.
          </Text>

          <Text>
            As informações são utilizadas apenas para fins de atendimento e comunicação direta com o cliente.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. Armazenamento e segurança</SectionTitle>

          <Text>
            As informações enviadas são armazenadas apenas pelo tempo necessário para o atendimento e organização do processo de criação.
          </Text>

          <Text>
            São adotadas medidas razoáveis de segurança para proteger os dados enviados, porém nenhum sistema é totalmente seguro.
          </Text>
        </Section>

        <Section>
          <SectionTitle>6. Direitos do usuário</SectionTitle>

          <Text>
            O usuário pode solicitar a qualquer momento:
          </Text>

          <List>
            <li>Acesso às informações enviadas;</li>
            <li>Correção de dados;</li>
            <li>Exclusão dos dados de contato.</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Contato</SectionTitle>

          <Text>
            Para dúvidas ou solicitações relacionadas aos dados enviados, entre em contato:
          </Text>

          <ContactBox>
            contato@kelybarros.com
          </ContactBox>

          <Text>
            Ou diretamente via WhatsApp disponível nesta página.
          </Text>
        </Section>

        <Section>
          <SectionTitle>8. Alterações</SectionTitle>

          <Text>
            Esta Política de Privacidade pode ser atualizada para refletir melhorias no processo de atendimento ou mudanças legais.
          </Text>
        </Section>

        <Link to="/">
          <Button>
            <ArrowLeft />
            Voltar ao início
          </Button>
        </Link>
      </Content>
    </Container>

    <WhatsAppButton />
    <Footer />
    </>
  );
};

export default PrivacyPolicy;