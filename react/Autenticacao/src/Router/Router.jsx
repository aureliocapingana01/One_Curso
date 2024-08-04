import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detals from "../Pages/Detals";
import { Erro } from "../Pages/Erro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detals" element={<Detals />} />
        <Route path="*" element={<Erro/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
