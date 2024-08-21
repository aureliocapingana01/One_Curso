import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePages";
import { CurtidosPage } from "../Pages/Curtidos";
import { ErroPage } from "../Pages/ErroPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="curtidos" element={<CurtidosPage />} />
        <Route path="*" element={<ErroPage />} />
      </Routes>
    </BrowserRouter>
  );
};
