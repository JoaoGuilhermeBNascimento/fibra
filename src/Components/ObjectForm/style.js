import styled from "styled-components";

export const Container = styled.div`
  color: #222;

  h3 {
    margin-top: 16px;
  }
`;

export const Input = styled.textarea`
  display: flex;
  max-width: 100%;
  width: 770px;
  height: 150px;
  padding: 16px;
  position: relative;
`;

export const SecondInput = styled.input`
  display: flex;
  padding: 0 16px;
  width: 300px;
  height: 24px;
  margin-right: 24px;
  border-radius: 6px;
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
  p {
    border-radius: 0px;
  }
`;
export const InputEntidade = styled.select`
  width: 100%;
  max-width: 300px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.gray[900]};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.019);
  height: 32px;
  border-radius: 4px;
  outline: none;
  /* outline-color: ${({ theme }) => theme.colors.gray[200]}; */
  padding: 0 16px;
  margin-top: 8px;
  margin-left: 4px;
  font-size: 16px;
  transition: border-color 1s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
