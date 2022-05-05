import { useState } from "react";
import { Container, Input, SecondInput, Box } from "./style";
import Select from "../Select";

export default function Objectform() {
  const [objeto, setObjeto] = useState("");

  function handleObjectChange(event) {
    setObjeto(event.target.value);
  }

  return (
    <Container>
      <Box>
        <Select>
          <option value="">Entidade</option>
          <option value="FIBRA">FIBRA</option>
          <option value="SESI">SESI</option>
          <option value="SENAI">SENAI</option>
          <option value="IEL">IEL</option>
        </Select>
        <p>Unidade / Área:</p>
        <SecondInput />
      </Box>

      <h3> 1. OBJETO </h3>
      <Input
        placeholder="Digite aqui o Objeto"
        type="text"
        onChange={handleObjectChange}
      />
      <h3>
        2. ORIGEM DOS RECURSOS E CENTRO DE RESPONSABILIDADE CONTÁBIL PARA
        ATENDIMENTO À DESPESA
      </h3>
        <p>As despesas provenientes para o XXXXXXXXX serão apropriadas da seguinte forma</p>
        
      <p>
        Unidade Operacional:
        <SecondInput type="text" />
      </p>
      <p>
        Centro de Responsabilidade:
        <SecondInput type="text" />
      </p>
      <p>
        Conta Contábil:
        <SecondInput type="text" />
      </p>
    </Container>
  );
}
