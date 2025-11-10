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
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Контент займає весь доступний простір */}
      <main className="flex-grow">
        <Container>
          <Routes>
            <Route path="/" element={<Home className="py-10" />} />
            <Route path="/products" element={<Products className="py-10" />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
