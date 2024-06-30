"use client";

import { useRouter } from "next/navigation";
import { Theme } from "../home.style";

export default function ThemeItem({ itemId, children }: any) {
  const router = useRouter();

  const onClickMoveToQuizDetail = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <Theme onClick={() => onClickMoveToQuizDetail(itemId)}>{children}</Theme>
  );
}
