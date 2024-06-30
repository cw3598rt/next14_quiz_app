import { styled } from "../../styled-system/jsx";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 36;
  font-weight: bold;
  color: green;
`;

export const Divider = styled.div`
  height: 1;
  width: 70vw;
  backgroundcolor: green;
`;

export const Subtitle = styled.h3`
  font-size: 16;
  color: green;
`;

export const Themes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const Theme = styled.div`
    width: calc(100% /5);
    height: 250;
    background-color: bisque;
    border-radius: 10;
    margin: 5;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    },
    transition: all 350ms ease-in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: green;
    text-align: center;
  `;
