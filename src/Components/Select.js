import styled from "styled-components";

export default styled.select`
  width: 100%;
  border: none;
  max-width: 300px;
  background: #fff;
  border: 1px solid #fff;
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
