import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./styles";

function WhatsAppButton() {
  return (
    <Button
      href="https://wa.me/5566996659126?text=Olá! Preciso de suporte com o briefing."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com suporte no WhatsApp"
    >
      <FaWhatsapp />
    </Button>
  );
}

export default WhatsAppButton;