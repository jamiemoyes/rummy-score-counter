import { useGameContext } from "../context/GameContext";
import { Button } from "./Button";

const GameOver = () => {
  const { resetGame, gameOver, getHighestPlayer } = useGameContext();
  if (!gameOver) return <></>;
  const { name } = getHighestPlayer();
  return (
    <div>
      <h1>🎉 Game Over!</h1>
      <p>{name} has lost the game! </p>
    </div>
  );
};

export { GameOver };
