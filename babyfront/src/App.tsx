import { Route, Routes } from "react-router-dom";
import { Home } from "./components/view/Home";
import LoginPage from "./components/view/LoginPage";
import { PregnantDataView } from "./components/view/PregnantDataView";
import { DataHistory } from "./components/view/DataHistory";
import ListPregnants from "./components/view/ListPregnants";
import ListDoctors from "./components/view/ListDoctors";
import { AssociatePregnantDoctor } from "./components/view/AssociatePregnantDoctor";
import Form from "./components/primitive/Form";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/PregnantData/:id" element={<PregnantDataView />} />
      <Route path="/PregnantData/:id/History/:type" element={<DataHistory />} />
      <Route path="/ListPregnants" element={<ListPregnants />} />
      <Route path="/ListDoctors" element={<ListDoctors />} />
      <Route path="/AssociatePregnantDoctor" element={<AssociatePregnantDoctor />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/Form/Edit" element={<Form />} />
    </Routes>
  );
}


export default App;
