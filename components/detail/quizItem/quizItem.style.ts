import { styled } from "@/styled-system/jsx";
import Markdown from "react-markdown";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Category = styled.h1`
  font-size: 36;
  font-weight: bold;
  color: green;
`;

export const QuestionNo = styled.h3`
  color: black;
  font-size: 16;
`;

export const Question = styled(Markdown)`
  color: green;
  font-size: 24;
  font-weight: 400;
`;

export const AnswerBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
export const CongratsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const CongratsLights = styled.span`
  width: 1em;
  height: 0.5em;
  display: block;
  border-radius: 10px;

  &:nth-of-type(2n-1) {
    background-color: red;
    animation: bar1 0.8s infinite ease;
  }
  &:nth-of-type(2n) {
    background-color: yellow;
    animation: bar2 0.8s infinite ease;
  }
`;

export const CongratsComment = styled.h2`
  clear: both;
  font-family: verdana;
  align-self: center;
  font-size: 1.25em;
`;
export const WrongBox = styled.main`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const WrongGraphicBox = styled.div`
  position: relative;
  width: 8.75em;
  height: 8.75em;
`;

export const Hair = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 8.75em;
  height: 1.75em;
  border-bottom-left-radius: 1.25em;
  border-top-right-radius: 1.25em;
  background: linear-gradient(
    45deg,
    #fec733 0%,
    #fec733 30%,
    #fed73a 30%,
    #fed73a 50%,
    #fce15c 50%,
    #fce15c 100%
  );
  transform-origin: 100%;
`;

export const SideBurns = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 6.25em;
  width: 1.25em;
  background: #fce15c;
  border-bottom-left-radius: 1.25em;
  border-top-right-radius: 1.25em;
`;
export const Face = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  width: 7.5em;
  height: 8.125em;
  background: #fbac3e;
  border-bottom-right-radius: 1.25em;
  border-top-right-radius: 1.25em;
  border-top-left-radius: 2.5em;
  border-bottom-left-radius: 3.75em;
`;
export const EyeBrowLeft = styled.span`
  display: block;
  position: absolute;
  top: 2.5em;
  background: #fce15c;
  width: 1.875em;
  height: 0.375em;

  & {
    left: 0.625em;
    border-bottom-left-radius: 0.375em;
    border-top-right-radius: 0.375em;
  }

  &.eyebrow-right {
    right: 2.5em;
    border-top-left-radius: 0.375em;
    border-bottom-right-radius: 0.375em;
  }

  &::after {
    content: "";
    position: absolute;
    background: #333;
    width: 0.75em;
    height: 0.25em;
    border-radius: 0.625em;
    top: 0.625em;
    left: 0.3125em;
  }
`;
export const EyeBrowRight = styled.span`
  display: block;
  position: absolute;
  top: 2.5em;
  background: #fce15c;
  width: 1.875em;
  height: 0.375em;

  & {
    right: 2.5em;
    border-top-left-radius: 0.375em;
    border-bottom-right-radius: 0.375em;
  }

  &::after {
    content: "";
    position: absolute;
    background: #333;
    width: 0.75em;
    height: 0.25em;
    border-radius: 0.625em;
    top: 0.625em;
    left: 0.3125em;
  }
`;
export const Nose = styled.span`
  display: block;
  position: absolute;
  width: 0.5em;
  height: 2.5em;
  top: 3.125em;
  left: 3em;
  border-radius: 0.5em;
  background: #bf6a2e;
`;
export const Mouth = styled.span`
  display: block;
  position: absolute;
  width: 1.875em;
  height: 0.375em;
  top: 6.25em;
  left: 3.75em;
  border-radius: 0.375em;
  background: #333;
`;
export const Bubble = styled.span`
  display: flex;
  position: absolute;
  top: 1.875em;
  background: #fce15c;
  width: 7.5em;
  height: 2.5em;
  left: -8.75em;
  border-bottom-left-radius: 0.75em;
  border-top-right-radius: 0.75em;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  color: #333;

  &::after {
    content: "";
    position: absolute;
    bottom: -0.625em;
    right: -0.625em;
    width: 0.625em;
    height: 0.625em;
    background: #fce15c;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 50%;
  }
`;

export const NextButton = styled.button`
  margin-left: calc(100% / 2);
  background-color: green;
  color: white;
  padding: 15px;
  width: 100px;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  transition: all 150ms ease-in;
`;
