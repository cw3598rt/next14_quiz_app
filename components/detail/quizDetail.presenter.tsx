import { QuizDetailPresenterProps } from "./quizDetail.type";
import QuizItemContainer from "./quizItem/quizItem.container";

export default function QuizDetailPresenter({
  list,
  questionNo,
  setQuestionNo,
  currentQuestion,
}: QuizDetailPresenterProps) {
  return (
    <QuizItemContainer
      currentQuestion={currentQuestion}
      questionNo={questionNo}
      setQuestionNo={setQuestionNo}
    />
  );
}
