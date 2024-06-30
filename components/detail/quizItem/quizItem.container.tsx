import { useRouter } from "next/navigation";
import QuizItemPresenter from "./quizItem.presenter";
import { QuizItemContainerProps } from "./quizItem.type";
import { useState } from "react";

export default function QuizItemContainer({
  questionNo,
  setQuestionNo,
  currentQuestion,
}: QuizItemContainerProps) {
  const router = useRouter();
  const [pickedAnswer, setPickedAnswer] = useState("");

  const answerList = currentQuestion
    ? [
        ...currentQuestion?.incorrect_answers,
        currentQuestion.correct_answer,
      ].sort(() => 0.5 - Math.random())
    : [];

  const onClickAnswer = (answer: string) => {
    if (questionNo > 8) {
      router.push("/");
    } else {
      setPickedAnswer(answer);
      setQuestionNo((prev) => prev + 1);
    }
  };

  return (
    <QuizItemPresenter
      questionNo={questionNo}
      onClickAnswer={onClickAnswer}
      currentQuestion={currentQuestion}
      answerList={answerList}
    />
  );
}
