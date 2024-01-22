import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const Routers = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Routes>
        <Route path="/about" Component={About} />
      </Routes>
      <Routes>
        <Route path="/contacts" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
