"use client";

import { useEffect, useState } from "react";
import QuizDetailPresenter from "./quizDetail.presenter";
import { getQuizDetail } from "./quizDetail.query";

import { useParams } from "next/navigation";

export default function QuizDetailContainer() {
  const [list, setList] = useState([]);
  const [questionNo, setQuestionNo] = useState(0);
  const params = useParams();
  const currentQuestion = list[questionNo];

  const getQuizList = async (id: string) => {
    try {
      const result = await getQuizDetail(id);

      if (result.length === 0) {
        return <div>no data</div>;
      }
      setList(result.results);
    } catch (error) {
      throw new Error("connection got issue");
    }
  };
  useEffect(() => {
    getQuizList(params.themeId as string);
  }, []);

  return (
    <QuizDetailPresenter
      list={list}
      questionNo={questionNo}
      setQuestionNo={setQuestionNo}
      currentQuestion={currentQuestion}
    />
  );
}
