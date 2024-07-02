import { atom } from "recoil";

export const pickedAnswerListState = atom({
  key: "pickedAnswerListState",
  default: [{ pickedAnswer: "", isCorrect: false }],
});
