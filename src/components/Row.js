import styled from "styled-components";
import { useGameContext } from "../context/GameContext";
import { Cell } from "./Cell";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Row = ({ players, index }) => {
  const { setPlayerRoundScoreByName, round } = useGameContext();
  const updateRoundScore = (name, score) =>
    setPlayerRoundScoreByName({ name, round, score });

  return (
    <Grid>
      {players.map(({ name }) => (
        <Cell
          onChange={({ target: { value } }) => updateRoundScore(name, value)}
          disabled={index !== round}
        />
      ))}
    </Grid>
  );
};

export { Row };
