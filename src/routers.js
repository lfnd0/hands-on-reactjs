import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Product from "./pages/Product";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
