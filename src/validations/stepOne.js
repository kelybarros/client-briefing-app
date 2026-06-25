export const validateStepOne = (state) => {
  const {name, email, whatsapp } = state.generalInfo;

  if (!name?.trim()){
    return 'Nome é pbrigatório';
  }

    if (!email?.trim()){
    return 'Email é obrigatório';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    return "Digite um email válido";
  }

    if (!whatsapp?.trim()){
    return 'WhatsApp é obrigatório';
  }

    const phoneNumbers = whatsapp.replace(/\D/g, "");

  if (phoneNumbers.length !== 11) {
    return "Digite um WhatsApp válido";
  }


  return null;
};