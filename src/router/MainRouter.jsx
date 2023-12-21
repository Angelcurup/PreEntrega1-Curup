import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import Nav from "../components/NavBarComponent/NavBarComponent";
import { ItemDetailContainer } from "../pages/ItemDetailContainer";
import { category } from "../pages/Category";


export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/category/:productId" element={<category />} />
      </Routes>
    </BrowserRouter>
  );
};
