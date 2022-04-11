import { Route, Routes } from "react-router-dom";
import AppelsOffres from "./components/acquisition/AppelsOffres.jsx";
import CreationAppelOffre from "./components/acquisition/CreationAppelOffre.jsx";
import DetailAppelOffre from "./components/acquisition/DetailAppelOffre.jsx";
import Index from "./pages/acceuil.jsx";
import GestionAcquisition from "./pages/GastionAcquisition.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GestionAcquisition/>}>
            <Route path="appelsoffres" element={<AppelsOffres/>}/>
            <Route path="details" element={<DetailAppelOffre/>}/>
            <Route path="creationappelsoffres" element={<CreationAppelOffre/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
