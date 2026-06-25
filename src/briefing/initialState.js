export const initialState = {
  currentStep: 1,
  status: "form",

  generalInfo: {
    name: "",
    company: "",
    email: "",
    whatsapp: "",
  },

  aboutProject: {
    type: null,
    presence: [],
    text: "",
  },

  audienceInfo: {
    audience: "",
    age: [],
    interest: "",
  },

  objective: {
    primary: null,
    secondary: [],
    text: "",
  },

  visualIdentity: {
    options: null,
    colors: "",
    reference: "",
    avoid: "",
  },

  features: {
    pages: "",
    important: "",
    textCreator: null,
    materialDelivery: null,
  },
};