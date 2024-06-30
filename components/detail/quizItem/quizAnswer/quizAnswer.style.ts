import { styled } from "@/styled-system/jsx";

export const Button = styled.button`
  background-color: grey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 20px;
  &:hover {
    background-color: green;
    color: white;
    cursor: pointer;
  }
  transition: all 250ms ease-in;
`;
