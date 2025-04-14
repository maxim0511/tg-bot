import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks";
import { Form, Header, ProductList } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  const { TELEGRAM } = useTelegram();

  useEffect(() => {
    TELEGRAM.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
