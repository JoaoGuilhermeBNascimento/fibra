import { Box, Container } from "./style"

export default function DateForm() {
  return (
    <Container>
      <small>
        <u>Assinatura do Demandante (Diretor/Coordenador/Gerente)</u>
      </small>
      <Box>
        Data: <input type="text" />
        <hr />
        <input type="text" />
      </Box>
      <p>De acordo,</p>
      <Box>
        <p>Gestor</p>
        <input type="text" />
        <hr />
        <p>Fiscal Titular</p>
        <input type="text" />
      </Box>
    </Container>
  );

};