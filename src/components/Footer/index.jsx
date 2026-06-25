import { Container, Text, TextLink, ContentTexts } from "./styles";

function Footer() {
  return (
    <Container>
      <ContentTexts>
      <Text>© 2026 Kely Barros. Todos os direitos reservados.</Text>
      <TextLink  to="/politica-de-privacidade">Política de Privacidade</TextLink>

      </ContentTexts>
    </Container>
  );
}

export default Footer;