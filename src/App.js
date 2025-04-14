import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks";
import { Header } from "./components";

function App() {
  const { TELEGRAM, onToggleButton } = useTelegram();

  useEffect(() => {
    TELEGRAM.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
