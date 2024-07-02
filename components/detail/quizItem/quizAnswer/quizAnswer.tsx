import Markdown from "react-markdown";
import { QuizAnswerProps } from "./quizAnswer.type";
import * as S from "./quizAnswer.style";

export default function QuizAnswer({
  onClickAnswer,
  item,
  pickedAnswer,
  currentQuestion,
}: QuizAnswerProps) {
  return (
    <S.Button
      onClick={() => onClickAnswer(item)}
      data-picked={pickedAnswer === item}
      disabled={!!pickedAnswer}
      data-correctanswer={
        !!pickedAnswer &&
        pickedAnswer !== item &&
        currentQuestion.correct_answer === item
      }
    >
      <Markdown>{item}</Markdown>
    </S.Button>
  );
}
