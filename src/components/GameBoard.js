import { useGameContext } from "../context/GameContext";
import { Row } from "./Row";

const GameBoard = ({ players }) => {
  const { rounds } = useGameContext();

  return (
    <div>
      {rounds.map((_, index) => (
        <Row players={players} index={index} />
      ))}
    </div>
  );
};

export { GameBoard };
