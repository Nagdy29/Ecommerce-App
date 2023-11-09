import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navv } from "./components/Navv";
import { Products } from "./components/Products";
import { Product } from "./components/Product";
import { Cart } from "./components/Cart";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Contect } from "./components/Contect";

function App() {
  return (
    <div>
      <Navv />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contect" element={<Contect />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
