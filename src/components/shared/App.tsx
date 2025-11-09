import React from "react";
import { Home } from "./pages/home";
import { Route, Routes } from "react-router";
import { Header } from "./header";

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home className="py-10" />} />
      </Routes>
    </main>
  );
}

export default App;
