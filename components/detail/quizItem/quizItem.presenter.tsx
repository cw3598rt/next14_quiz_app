import QuizAnswer from "./quizAnswer/quizAnswer";
import * as S from "./quizItem.style";
import { QuizItemPresenterProps } from "./quizItem.type";
import Markdown from "react-markdown";

export default function QuizItemPresenter({
  questionNo,
  onClickAnswer,
  currentQuestion,
  answerList,
  isCorrect,
  onClickNext,
  pickedAnswer,
}: QuizItemPresenterProps) {
  return (
    <S.Wrapper>
      <S.Category>{currentQuestion?.category}</S.Category>
      <div>
        <S.QuestionNo>{`Question ${questionNo + 1}`}</S.QuestionNo>
        <S.Question>{currentQuestion?.question}</S.Question>
      </div>

      <S.AnswerBox>
        {answerList?.map((item) => (
          <QuizAnswer
            key={item}
            onClickAnswer={onClickAnswer}
            item={item}
            pickedAnswer={pickedAnswer}
            currentQuestion={currentQuestion}
          />
        ))}
      </S.AnswerBox>
      {typeof isCorrect === "boolean" && isCorrect ? (
        <S.CongratsBox>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>

          <S.CongratsComment>정답입니다</S.CongratsComment>

          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
          <S.CongratsLights></S.CongratsLights>
        </S.CongratsBox>
      ) : typeof isCorrect === "string" ? (
        <></>
      ) : (
        typeof isCorrect === "boolean" &&
        !isCorrect && (
          <S.WrongBox>
            <S.WrongGraphicBox>
              <S.Face></S.Face>
              <S.Hair></S.Hair>
              <S.SideBurns></S.SideBurns>
              <S.EyeBrowLeft></S.EyeBrowLeft>
              <S.EyeBrowRight></S.EyeBrowRight>
              <S.Nose></S.Nose>
              <S.Mouth></S.Mouth>
              <S.Bubble>오답입니다</S.Bubble>
            </S.WrongGraphicBox>
          </S.WrongBox>
        )
      )}

      {pickedAnswer && <S.NextButton onClick={onClickNext}>Next</S.NextButton>}
    </S.Wrapper>
  );
}
