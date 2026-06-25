import {
  Container,
  Top,
  Logo,
  TitleHeader,
  SubTitleHeader,
  Middle,
  Badge,
  Title,
  SubTitle,
  End,
  Progress,
  Loading,
  Content,
  Texts,
  Divider,
} from './styles';

import logo from '../../assets/logo.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/briefing');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container>
      <Content>

        <Top>
          <Logo>
            <img src={logo} alt="logotipo" />
          </Logo>

          <Texts>
            <TitleHeader>KELY BARROS</TitleHeader>
            <SubTitleHeader>Desenvolvedora Full Stack</SubTitleHeader>
          </Texts>
        </Top>

        <Divider />

        <Middle>
          <Badge>BRIEFING</Badge>

          <Title>Bem-vindo(a)</Title>

          <SubTitle>
            Estamos preparando seu briefing para entender melhor seu projeto e organizar todas as informações necessárias.
          </SubTitle>
        </Middle>

        <End>
          <Progress>
            <div />
          </Progress>

          <Loading>Carregando briefing...</Loading>
        </End>

      </Content>
    </Container>
  );
}

export default Home;