import { useRouter } from "next/navigation";
import QuizItemPresenter from "./quizItem.presenter";
import { QuizItemContainerProps } from "./quizItem.type";
import { useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { pickedAnswerListState } from "@/commons/store";

export default function QuizItemContainer({
  questionNo,
  setQuestionNo,
  currentQuestion,
}: QuizItemContainerProps) {
  const router = useRouter();
  const [pickedAnswer, setPickedAnswer] = useState("");
  const [, setPickedAnswerList] = useRecoilState(pickedAnswerListState);

  const answerList = useMemo(
    () =>
      currentQuestion
        ? [
            ...currentQuestion?.incorrect_answers,
            currentQuestion.correct_answer,
          ].sort(() => 0.5 - Math.random())
        : [],
    [currentQuestion],
  );

  const onClickAnswer = (answer: string) => {
    setPickedAnswer(answer);

    setPickedAnswerList((prev) =>
      [
        ...prev,
        {
          pickedAnswer: answer,
          isCorrect: currentQuestion?.correct_answer === answer,
        },
      ].filter((item) => item.pickedAnswer !== ""),
    );
  };

  const onClickNext = () => {
    if (questionNo > 8) {
      router.replace("/result");
    } else {
      setQuestionNo((prev) => prev + 1);
    }
    setPickedAnswer("");
  };

  const isCorrect = pickedAnswer
    ? currentQuestion?.correct_answer === pickedAnswer
    : "haven't chosen";

  return (
    <QuizItemPresenter
      questionNo={questionNo}
      onClickAnswer={onClickAnswer}
      currentQuestion={currentQuestion}
      answerList={answerList}
      isCorrect={isCorrect}
      onClickNext={onClickNext}
      pickedAnswer={pickedAnswer}
    />
  );
}
