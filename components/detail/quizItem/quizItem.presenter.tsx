import QuizAnswer from "./quizAnswer/quizAnswer";
import * as S from "./quizItem.style";
import { QuizItemPresenterProps } from "./quizItem.type";
import Markdown from "react-markdown";

export default function QuizItemPresenter({
  questionNo,
  onClickAnswer,
  currentQuestion,
  answerList,
}: QuizItemPresenterProps) {
  return (
    <S.Wrapper>
      <S.Category>{currentQuestion?.category}</S.Category>
      <S.QuestionNo>{`Question ${questionNo + 1}`}</S.QuestionNo>
      <S.Question>{currentQuestion?.question}</S.Question>

      <S.AnswerBox>
        {answerList?.map((item) => (
          <QuizAnswer key={item} onClickAnswer={onClickAnswer} item={item} />
        ))}
      </S.AnswerBox>
    </S.Wrapper>
  );
}
