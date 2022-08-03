import { Box, Container, Input } from "./style";

export default function DateForm() {
  return (
    <Container>

      <Box>
        <p>
          Data: <Input type="text" />
        </p>

        <p>
          Assinatura do Demandante:
          <Input type="text" placeholder="(Diretor/Coordenador/Gerente)" />
        </p>
      </Box>
      <p>De acordo,</p>
      <Box>
        <p>
          Gestor:
          <Input type="text" />
        </p>

        <p>
          {" "}
          Fiscal Titular:
          <Input type="text" />
        </p>
      </Box>
    </Container>
  );
}
