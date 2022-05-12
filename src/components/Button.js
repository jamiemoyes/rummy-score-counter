import { useGameContext } from "../context/GameContext";

const Button = ({ children, onClick, ...props }) => {
  const { startNewRound } = useGameContext();
  return <button onClick={onClick || startNewRound}>{children}</button>;
};

export { Button };
