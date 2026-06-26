import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";

import Home from "./pages/Home";
import Briefing from "./pages/Briefing";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>

        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/briefing" element={<Briefing />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;