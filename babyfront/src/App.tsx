import { Route, Routes } from "react-router-dom";
import  { Home } from "./components/view/Home";
import React from "react";
import LoginPage from "./components/view/LoginPage";
import { PregnantDataView } from "./components/view/PregnantDataView";
import { DataHistory } from "./components/view/DataHistory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/PregnantData/:id" element={<PregnantDataView />} />
      <Route path="/PregnantData/:id/History/" element={<DataHistory />} />
    </Routes>
  );
}


export default App;
