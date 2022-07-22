import { LoseText, WinText } from "./styles";

export const Win = () => {
  return <WinText>Gratulálunk, nyertél!</WinText>;
};

export const Lose = () => {
  return <LoseText>Sajnos most nem nyertél!</LoseText>;
};
