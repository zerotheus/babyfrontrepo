import { Route, Routes } from "react-router-dom";
import  { Home } from "./components/view/Home";
import React from "react";
import LoginPage from "./components/view/LoginPage";
import { PregnantDataView } from "./components/view/PregnantDataView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/PregnantData/:id" element={<PregnantDataView />} />
    </Routes>
  );
}


export default App;
