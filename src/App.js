import styled from "styled-components";
import "./App.css";
import { Button } from "./components/Button";
import { GameProvider } from "./context/GameContext";
import { GameBoard } from "./components/GameBoard";
import { GameOver } from "./components/GameOver";

function App() {
  const players = [{ name: "Jamie" }, { name: "Alison" }, { name: "Ted" }];
  const initials = players.map(({ name }) => name.charAt(0));
  return (
    <div className="App">
      <TitleRow>
        {initials.map((i) => (
          <h1>{i}</h1>
        ))}
      </TitleRow>

      <GameProvider players={players}>
        <GameBoard players={players} />
        <Button>Continue</Button>
        <GameOver />
      </GameProvider>
    </div>
  );
}

const TitleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 30rem;
`;

export default App;
