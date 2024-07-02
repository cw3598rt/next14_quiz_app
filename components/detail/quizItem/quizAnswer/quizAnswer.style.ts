import { styled } from "@/styled-system/jsx";

export const Button = styled.button`
  &[data-picked="false"] {
    background-color: grey;
  }
  &[data-picked="true"] {
    background-color: green;
    color: white;
  }
  &[data-correctanswer="true"] {
    background-color: orange;
    color: white;
  }
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
