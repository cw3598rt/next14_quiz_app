import { Dispatch, SetStateAction } from "react";

export interface QuizDetailPresenterProps {
  list: any;
  questionNo: number;
  setQuestionNo: Dispatch<SetStateAction<number>>;
  currentQuestion: any;
}
