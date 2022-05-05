import styled from "styled-components";

export const Container = styled.div`
  color: #222;

  h3 {
    padding: 20px 0;
  }
`;

export const Input = styled.textarea`
  width: 770px;
  height: 150px;
  padding: 16px;
  position: relative;
`;

export const SecondInput = styled.input`
  display: flex;
  width: 300px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray[900]};
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.colors.gray[200]};

  hr {
    color: ${({ theme }) => theme.colors.gray[200]};
    background: black;
    width: 5px;
    height: 50px;
    margin: 5px;
  }
`;
