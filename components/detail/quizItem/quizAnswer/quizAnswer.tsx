import Markdown from "react-markdown";
import { QuizAnswerProps } from "./quizAnswer.type";
import * as S from "./quizAnswer.style";

export default function QuizAnswer({ onClickAnswer, item }: QuizAnswerProps) {
  return (
    <S.Button onClick={() => onClickAnswer(item)}>
      <Markdown>{item}</Markdown>
    </S.Button>
  );
}
