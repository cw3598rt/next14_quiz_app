"use client";
import { pickedAnswerListState } from "@/commons/store";
import { Progress, ProgressProps } from "antd";
import { useRecoilState } from "recoil";
import * as S from "./result.style";

const twoColors: ProgressProps["strokeColor"] = {
  "0%": "#108ee9",
  "100%": "#87d068",
};

export default function ResultPresenter() {
  const [pickedAnswerList] = useRecoilState(pickedAnswerListState);
  const percentage =
    (pickedAnswerList.filter((item) => item.isCorrect === true).length /
      pickedAnswerList.length) *
    100;
  return (
    <S.Wrapper>
      <S.Title>Result</S.Title>
      <Progress type="circle" percent={percentage} strokeColor={twoColors} />
      <div>
        <div>
          정답{" "}
          <span>
            {pickedAnswerList.filter((item) => item.isCorrect === true).length}
            개
          </span>
        </div>
        <div>
          오답{" "}
          <span>
            {pickedAnswerList.filter((item) => item.pickedAnswer !== "")
              .length > 0
              ? pickedAnswerList.filter((item) => item.isCorrect === false)
                  .length
              : 0}
            개
          </span>
        </div>
      </div>
    </S.Wrapper>
  );
}
