import { ThemeProvider } from "styled-components";
import Router from "./router/Router";
import { theme } from "./styles/theme";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  setScreenSize();
  window.addEventListener("resize", setScreenSize);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}
export default App;
