import { useState } from "react";
import { Container, Input, SecondInput, Box } from "./style";
import Select from "../Select";

export default function Objectform() {
  const [, setObjeto] = useState("");

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
        {" "}
        2. ORIGEM DOS RECURSOS E CENTRO DE RESPONSABILIDADE CONTÁBIL PARA
        ATENDIMENTO À DESPESA
      </h3>
      <Box>
        <ul>
          <p>
            {" "}
            As despesas provenientes para o XXXXXXXXX serão apropriadas da
            seguinte forma
          </p>
          <li>
            2.1 - Unidade Operacional:
            <SecondInput type="text" />
          </li>
          <li>
            {" "}
            2.2 - Centro de Responsabilidade:
            <SecondInput type="text" />
          </li>
          <li>
            2.3 - Conta Contábil:
            <SecondInput type="text" />
          </li>
        </ul>
      </Box>

      <h3> 3. JUSTIFICATIVA DA CONTRATAÇÃO </h3>
      <Input
        placeholder="Digite aqui o Objeto"
        type="text"
        onChange={handleObjectChange}
      />
      <h3> 4. DESCRIÇÃO DETALHADA </h3>
      <Input
        placeholder="Digite aqui o Objeto"
        type="text"
        onChange={handleObjectChange}
      />
      <h3> 5. CONDIÇÕES GERAIS </h3>
      <Input
        placeholder="Digite aqui o Objeto"
        type="text"
        onChange={handleObjectChange}
      />
      <h3> 6. LOCAL E PRAZO DE ENTREGA DOS BENS OU DE EXECUÇÃO DOS SERVIÇOS</h3>
      <Box>
        <ul>
          <li>
            6.1 Local de entrega dos Bens ou de Realização dos Serviços:
            <SecondInput type="text" />
          </li>
          <li>
            6.2 Prazo para Entrega dos Bens ou Execução dos Serviços:
            <SecondInput type="text" />
          </li>
        </ul>
      </Box>
      <h3> 7. ACOMPANHAMENTO DA EXECUÇÃO E FISCALIZAÇÃO</h3>
      <Box>
        <ul>
          <li>
            7.1 Gestor do instrumento Contratual :
            <SecondInput type="text" />
          </li>
          <li>
            <p>7.2 Fiscal (is) do instrumento Contratual: </p>
            <SecondInput type="text" />
          </li>
          <li>
            7.3 Fiscal(is) do Suplente(s) do Instrumento Contratual:
            <SecondInput type="text" />
          </li>
        </ul>
      </Box>
      <p></p>
    </Container>
  );
}
