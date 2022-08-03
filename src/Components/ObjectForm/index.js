import { useState } from "react";
import { Container, Input, SecondInput, Box, InputEntidade } from "./style";

export default function Objectform() {
  const [entity, setEntity] = useState("");
  const [unidade, setUnidade] = useState("");
  const [objeto, setObjeto] = useState("");
  const [opUnity, setOpUnity] = useState("");
  const [respCenter, setRespCenter] = useState("");
  const [account, setAccount] = useState("");
  const [justify, setJustify] = useState("");
  const [description, setDescription] = useState("");
  const [generalCondition, setGeneralCondition] = useState("");

  function handleObjectChange(event) {
    setObjeto(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Box>
        <InputEntidade
          value={entity}
          onChange={(event) => setEntity(event.target.value)}
        >
          <option value="">Entidade</option>
          <option value="FIBRA">FIBRA</option>
          <option value="SESI">SESI</option>
          <option value="SENAI">SENAI</option>
          <option value="IEL">IEL</option>
        </InputEntidade>
        <p>Unidade / Área:</p>
        <SecondInput
          value={unidade}
          onChange={(event) => setUnidade(event.target.value)}
        />
      </Box>

      <h3> 1. OBJETO </h3>
      <Input
        value={objeto}
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
            As despesas provenientes para o XxXXxxXxX serão apropriadas da
            seguinte forma
          </p>
          <li>
            2.1 - Unidade Operacional:
            <SecondInput
              type="text"
              value={opUnity}
              onChange={(event) => setOpUnity(event.target.value)}
            />
          </li>
          <li>
            {" "}
            2.2 - Centro de Responsabilidade:
            <SecondInput
              type="text"
              value={respCenter}
              onChange={(event) => setRespCenter(event.target.value)}
            />
          </li>
          <li>
            2.3 - Conta Contábil:
            <SecondInput
              type="text"
              value={account}
              onChange={(event) => setAccount(event.target.value)}
            />
          </li>
        </ul>
      </Box>

      <h3> 3. JUSTIFICATIVA DA CONTRATAÇÃO </h3>
      <Input
        placeholder="Digite aqui o Objeto"
        type="text"
        value={justify}
        onChange={(event) => setJustify(event.target.value)}
      />
      <h3> 4. DESCRIÇÃO DETALHADA </h3>
      <Input
        placeholder="Digite aqui o Objeto"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <h3> 5. CONDIÇÕES GERAIS </h3>
      <Input
        placeholder="Digite aqui o Objeto"
        type="text"
        value={generalCondition}
        onChange={(event) => setGeneralCondition(event.target.value)}
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
            7.2 Fiscal (is) do instrumento Contratual:
            <SecondInput type="text" />
          </li>
          <li>
            7.3 Fiscal(is) do Suplente(s) do Instrumento Contratual:
            <SecondInput type="text" />
          </li>
        </ul>
      </Box>
    </Container>
  );
}
