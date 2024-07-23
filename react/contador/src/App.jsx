import { useState } from "react";
import "./App.css";

const App = () => {
  const [contador, setContador] = useState(0);

  const aoContador = (operador) => {
    operador == "+" ? setContador(contador + 1) : setContador(contador - 1);
  };

  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={() => aoContador("+")}>+</button>
      <button onClick={() => aoContador("-")}>-</button>
    </>
  );
};

export default App;
