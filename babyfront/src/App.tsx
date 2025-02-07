import { Route, Routes } from "react-router-dom";
import  { Home } from "./components/view/Home";
import React from "react";
import LoginPage from "./components/view/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}


export default App;
