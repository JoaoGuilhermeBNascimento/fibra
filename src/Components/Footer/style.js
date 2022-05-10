import styled from "styled-components";

export const Container = styled.div`
  color: #222;

  small {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Box = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: space-around;
  hr {
    color: ${({ theme }) => theme.colors.primary.lighter};
    background: ${({ theme }) => theme.colors.primary.lighter};
    width: 5px;
    height: 50px;
  }

  input {
    width: 300px;
    border: none;
    padding: 6px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray[900]};
  }
`;
export const Input = styled.div``;
