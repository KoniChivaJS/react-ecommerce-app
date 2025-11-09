import React from "react";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router";
import { Header } from "./header";
import { Products } from "./pages/products";
import { Container } from "./container";
import Favorites from "./pages/favorite";
import Cart from "./pages/cart";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home className="py-10" />} />
          <Route path="/products" element={<Products className="py-10" />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
