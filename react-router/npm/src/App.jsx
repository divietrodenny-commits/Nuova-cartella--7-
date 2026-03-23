import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/about";
import Products from "./Components/products";
import DefaultLayout from "./Components/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

