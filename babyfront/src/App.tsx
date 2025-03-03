import { Route, Routes } from "react-router-dom";
import { Home } from "./components/view/Home";
import LoginPage from "./components/view/LoginPage";
import { PregnantDataView } from "./components/view/PregnantDataView";
import { DataHistory } from "./components/view/DataHistory";
import ListPregnants from "./components/view/ListPregnants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/PregnantData/:id" element={<PregnantDataView />} />
      <Route path="/PregnantData/:id/History/:type" element={<DataHistory />} />
      <Route path="/ListPregnants" element={<ListPregnants />} />
    </Routes>
  );
}


export default App;
