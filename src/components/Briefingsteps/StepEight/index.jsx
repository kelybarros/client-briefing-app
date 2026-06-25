import { useEffect } from "react";
import confetti from "canvas-confetti";

import {
  Container,
  Card,
  Icon,
  Title,
  Description,
  ButtonGroup,
  Button,
} from "./styles";

import { FiCheck } from "react-icons/fi";
import { generateBriefingPdf } from "../../../services/pdfService";

function StepEight({ restartForm, state }) {

  const handleDownloadPdf = () => {
    generateBriefingPdf(state);
  };

  useEffect(() => {
    confetti({
      particleCount: 140,
      spread: 85,
      origin: { y: 0.6 },
      scalar: 1.1,
      gravity: 0.9,
      ticks: 200,
    });

    setTimeout(() => {
      confetti({
        particleCount: 70,
        spread: 120,
        startVelocity: 25,
        origin: { y: 0.7 },
      });
    }, 250);

    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 160,
        startVelocity: 20,
        origin: { y: 0.8 },
      });
    }, 600);

  }, []);

  return (
    <Container>
      <Card>
        <Icon>
          <FiCheck />
        </Icon>

        <Title>Briefing enviado com sucesso!</Title>

        <Description>
          Recebemos suas informações e já iniciamos a análise do seu projeto.
        </Description>

        <Description>
          Você pode baixar uma cópia em PDF ou reiniciar o formulário caso queira ajustar algo.
        </Description>

        <ButtonGroup>
          <Button onClick={handleDownloadPdf}>
            Baixar PDF
          </Button>

          <Button $secondary onClick={restartForm}>
            Voltar ao início
          </Button>
        </ButtonGroup>
      </Card>
    </Container>
  );
}

export default StepEight;