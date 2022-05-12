import { createContext, useContext, useState } from "react";

const GameContext = createContext({});

const GameProvider = ({ children, players }) => {
  const [scores, setScores] = useState([{}]);
  const [round, setRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const incrementRound = () => {
    setRound((prevRound) => prevRound + 1);
    scores.push({});
  };

  const startNewRound = () => {
    if (isOverLimit()) {
      setRound(-1);
      setGameOver(true);
    } else {
      incrementRound();
    }
  };

  const resetGame = () => {
    setScores([{}]);
    setRound(0);
    setGameOver(false);
    console.log("reset game!");
  };

  const calculateTotals = () =>
    scores.reduce((acc, rounds, index) => {
      players.forEach(
        (player) =>
          (acc[player.name] = (acc[player.name] ?? 0) + rounds[player.name])
      );
      return acc;
    }, {});

  const getHighestPlayer = () => {
    const totals = calculateTotals();
    return players.reduce((acc, player) => {
      return totals[player.name] > (totals[acc.name] ?? 0) ? player : acc;
    }, {});
  };

  const isOverLimit = () =>
    !!Object.values(calculateTotals()).find((total) => total >= 100);

  const getPlayerByName = (name) => players.find((p) => p.name === name);
  const setPlayerRoundScoreByName = ({ name, round, score }) => {
    const scoreAsInt = parseInt(score, 10);
    if (scores[round]) {
      setScores((prevScores) => {
        const newScores = [...prevScores];
        newScores[round][name] = scoreAsInt;
        return newScores;
      });
    } else {
      setScores([...scores, { [name]: scoreAsInt }]);
    }
  };

  return (
    <GameContext.Provider
      value={{
        getPlayerByName,
        setPlayerRoundScoreByName,
        round,
        startNewRound,
        rounds: scores,
        gameOver,
        resetGame,
        getHighestPlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };
