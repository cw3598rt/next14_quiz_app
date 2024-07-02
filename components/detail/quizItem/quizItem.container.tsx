import { useRouter } from "next/navigation";
import QuizItemPresenter from "./quizItem.presenter";
import { QuizItemContainerProps } from "./quizItem.type";
import { useMemo, useState } from "react";

export default function QuizItemContainer({
  questionNo,
  setQuestionNo,
  currentQuestion,
}: QuizItemContainerProps) {
  const router = useRouter();
  const [pickedAnswer, setPickedAnswer] = useState("");
  const [pickedAnswerList, setPickedAnswerList] = useState([""]);

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
      [...prev, answer].filter((item) => item != ""),
    );
  };

  const onClickNext = () => {
    if (questionNo > 8) {
      router.push("/");
    } else {
      setQuestionNo((prev) => prev + 1);
    }
    setPickedAnswer("");
  };

  const isCorrect = pickedAnswer
    ? currentQuestion?.correct_answer === pickedAnswer
    : "haven't chosen";
  console.log(pickedAnswerList);
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
