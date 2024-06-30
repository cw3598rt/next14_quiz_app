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
