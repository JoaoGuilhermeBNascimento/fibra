import styled from "styled-components";

export const Container = styled.div`
  color: #222;
  font-size: 16px;

  small {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Box = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: space-between;
  hr {
    color: ${({ theme }) => theme.colors.primary.lighter};
    background: ${({ theme }) => theme.colors.primary.lighter};
    width: 5px;
    height: 50px;
  }

  small {
    margin-left: 16px;
    padding: 0 16px;
  }
  p {
    margin-left: 16px;
    padding: 0 16px;
  }
`;
export const Input = styled.input`
  box-shadow: 0 0 0 0;
  outline: 0;
  width: 300px;
  border: none;
  padding: 0 4px;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray[900]};
  border-left: 0.5px solid ${({ theme }) => theme.colors.gray[900]};
`;
