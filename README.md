# Client Briefing App

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript\&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?logo=styled-components\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

A modern web application built with **React** to streamline client onboarding through a structured multi-step briefing process.

The application guides users through each stage of the form, validates the provided information, preserves progress automatically, sends the completed briefing via email, and generates a professional PDF report.

---

## Live Demo

🔗 **Application**

https://briefing.kelybarros.com/

---

---

## Features

* Multi-step client briefing form
* Interactive progress bar
* Step-by-step validation
* Automatic data persistence with LocalStorage
* Navigation between completed steps
* Automated email submission with EmailJS
* Professional PDF generation
* Animated success screen
* Responsive interface
* Component-based architecture

---

## 🛠 Tech Stack

* React
* JavaScript (ES6+)
* Vite
* Styled Components
* EmailJS
* jsPDF
* React Icons
* React Confetti

---

## Project Structure

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── briefing/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── validations/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## Architecture

The application follows a modular and component-based architecture, separating responsibilities into dedicated layers:

* **Components** – Reusable UI elements
* **Pages** – Application views
* **Services** – External integrations (EmailJS and PDF generation)
* **Validations** – Form validation rules
* **Utilities** – Helper and formatting functions
* **Briefing** – Centralized state management using the Reducer pattern

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/kelybarros/client-briefing-app.git
```

### Navigate to the project folder

```bash
cd client-briefing-app
```

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

---

## Application Flow

1. The client fills out the multi-step briefing form.
2. Each step is validated before moving forward.
3. Form data is automatically saved in LocalStorage.
4. The completed briefing is sent via EmailJS.
5. A professional PDF report is generated.
6. The user is redirected to a success page where the PDF can be downloaded.

---

## Purpose

This project simulates a real-world client onboarding workflow commonly used by agencies, freelancers, and software companies.

Its primary goal is to provide a clean, intuitive, and professional user experience while automating the collection, validation, and organization of project requirements.

---

## Future Improvements

* Backend integration
* Database persistence
* User authentication
* Admin dashboard
* Briefing history
* Internationalization (i18n)

---

## Author

**Kely Barros**

GitHub
https://github.com/kelybarros

LinkedIn
https://www.linkedin.com/in/kely-barros/

---

## ⭐ Show your support

If you found this project useful, consider giving it a ⭐ on GitHub.
