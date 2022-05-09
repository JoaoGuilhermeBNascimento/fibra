import styled from "styled-components";

export const Container = styled.div`
  color: #222;

  h3 {
    margin-top: 16px;
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
  height: 24px;
  margin-right: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray[900]};
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray[900]};

  hr {
    color: ${({ theme }) => theme.colors.gray[200]};
    background: black;
    width: 5px;
    height: 50px;
    margin: 5px;
  }

  ul {
    margin-left: 8px;
  }
  li {
    margin-left: 24px;
    margin-top: 16px;
    list-style: none;
  }
`;
