import React, { useState, createContext } from "react";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helpers/Contexts";
import "./App.css";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
