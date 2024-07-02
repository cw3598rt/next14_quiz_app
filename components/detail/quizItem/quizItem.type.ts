import { Dispatch, SetStateAction } from "react";

export interface QuizItemContainerProps {
  questionNo: number;
  setQuestionNo: Dispatch<SetStateAction<number>>;
  currentQuestion: any;
}

export interface QuizItemPresenterProps {
  questionNo: number;
  onClickAnswer: (answer: string) => void;
  currentQuestion: any;
  answerList: any[];
  isCorrect: boolean | "haven't chosen";
  onClickNext: () => void;
  pickedAnswer: string;
}
