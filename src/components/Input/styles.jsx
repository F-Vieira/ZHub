import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid transparent;

  padding: 7px;
  margin: 10px 0;

  background-color: var(--dark_green);
  color: var(--light_green);

  display: flex;
  align-items: center;

  .icon {
    margin-left: 5px;
  }

  .show_password {
    cursor: pointer;
  }

  transition: 1s;

  :focus-within {
    border: 2px solid var(--light_green);
  }
`;

export const Input = styled.input`
  width: 60%;
  background-color: var(--dark_green);
  color: var(--light_green);

  margin: 0 15px;

  ::placeholder {
    color: var(--light_green_transparent);
  }
`;
