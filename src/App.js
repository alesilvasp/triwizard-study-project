import { useEffect, useState } from "react";
import "./App.css";

import Students from "./components/students";
import StartPage from "./components/startPage";
import ThemeSound from "./components/soundTheme";

function App() {
  const [students, setStudents] = useState([]);
  const [startBattle, setStartBattle] = useState(false);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ThemeSound />
        {startBattle ? (
          <Students students={students} setStartBattle={setStartBattle} />
        ) : (
          <StartPage setStartBattle={setStartBattle} />
        )}
      </header>
    </div>
  );
}

export default App;
