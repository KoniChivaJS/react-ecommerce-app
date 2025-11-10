import React from "react";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router";
import { Header } from "./header";
import { Products } from "./pages/products";
import { Container } from "./container";
import Favorites from "./pages/favorite";
import Cart from "./pages/cart";
import NotFound from "./pages/notFound";
import Footer from "./footer";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Container className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
