import * as S from "@/components/home/home.style";
import { HomePresenterProps } from "./home.type";
import ThemeItem from "./themeItem/themeItem";

export default function HomePresenter({ themeList }: HomePresenterProps) {
  return (
    <S.Wrapper>
      <S.Title>Quiz Time</S.Title>
      <S.Divider></S.Divider>
      <S.Subtitle>Pick your Theme</S.Subtitle>
      <S.Themes>
        {themeList.trivia_categories
          .sort(() => 0.5 - Math.random())
          .slice(0, 8)
          .map((item: any) => (
            <ThemeItem itemId={item.id}>{item.name}</ThemeItem>
          ))}
      </S.Themes>
    </S.Wrapper>
  );
}
