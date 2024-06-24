import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Home/Hero";

import LocomotiveScroll from "locomotive-scroll";
import Products from "./Components/Products/Products";

const App = () => { 
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  })
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default App;
