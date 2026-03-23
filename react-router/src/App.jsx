import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./Components/AppHeader";
import Home from "./Components/Home";
import Products from "./Components/Products";
import About from "./Components/About";

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
