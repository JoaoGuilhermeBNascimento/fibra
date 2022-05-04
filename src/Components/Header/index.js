import { Container } from "./style";

import logo from "../../Assets/images/Logo.png";

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <hr />
      <h3>
        NOTA TÉCNICA PARA <br /> AQUISIÇÃO DE BENS E SERVIÇOS
      </h3>
    </Container>
  );
}
