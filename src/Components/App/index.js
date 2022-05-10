import Header from "../Header";
import { Container } from "./style";
import { ThemeProvider } from "styled-components";
import DefaultThemes from "../../Assets/style/themes/default";
import Objectform from "../ObjectForm";

import DateForm from "../Footer";

export default function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <Container>
        <Header />
        <Objectform />
        <DateForm/>
      </Container>
    </ThemeProvider>
  );
}
