import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  margin-top: 50px;
  margin-bottom: 48px;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #a2a2a2;

  img {
    max-width: 300px;
    height: 62px;
  }

  h3 {
    color: #222;
  }
  hr {
    color: ${({ theme }) => theme.colors.primary.lighter};
    background: black;
    width: 5px;
    height: 50px;
  }
`;
