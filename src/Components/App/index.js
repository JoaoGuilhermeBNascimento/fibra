import Header from "../Header";
import { Container } from "./style";
import { ThemeProvider } from "styled-components";
import DefaultThemes from "../../Assets/style/themes/default";
import Objectform from "../ObjectForm";

export default function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <Container>
        <Header />
        <Objectform/>
      </Container>
    </ThemeProvider>
  );
}
