import Markdown from "react-markdown";
import { QuizAnswerProps } from "./quizAnswer.type";
import * as S from "./quizAnswer.style";

export default function QuizAnswer({
  onClickAnswer,
  item,
  pickedAnswer,
}: QuizAnswerProps) {
  return (
    <S.Button
      onClick={() => onClickAnswer(item)}
      data-picked={pickedAnswer === item}
      disabled={!!pickedAnswer}
    >
      <Markdown>{item}</Markdown>
    </S.Button>
  );
}
