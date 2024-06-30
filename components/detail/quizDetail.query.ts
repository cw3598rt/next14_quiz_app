export const getQuizDetail = async (id: string) => {
  const reponse = await fetch(
    `https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`,
  );

  const result = await reponse.json();

  return result;
};
