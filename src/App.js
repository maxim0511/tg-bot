import { useEffect } from "react";
import "./App.css";

const TELEGRAM = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    TELEGRAM.ready();
  }, []);

  const onClose = () => TELEGRAM.close();

  return (
    <div className="App">
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
