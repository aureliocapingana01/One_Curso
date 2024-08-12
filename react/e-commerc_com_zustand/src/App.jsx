import "./App.css";
import { AvailableProduts } from "./components/AvailableProducts";
import { Cart } from "./components/Cart";
import { Total } from "./components/Total";

const App = () => {
  return (
    <>
      <h1>Exemplo de como usar o Zustand</h1>
      <h3>Como gerenciador de estado</h3>

      <Total />
      <AvailableProduts />
      <Cart />
    </>
  );
};

export default App;
