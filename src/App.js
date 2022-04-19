import {Route, Routes } from "react-router-dom";
import Index from "./pages/acceuil.jsx";
import LoginPersonnel from "./pages/connexionPresonnel.jsx";
import MotDePassePage from "./pages/oubliMotPasse.jsx";
import InscriptionFournisseur from "./pages/inscriptionFournisseur.jsx";
import Dashboard from "./pages/admin/dashboardAdmin.jsx";
import LoginFournisseur from "./pages/connexionFournisseur.jsx";
import AdminPersonnel from "./pages/admin/adminPersonnel.jsx";
import EditPersonnel from "./pages/admin/editPersonnel.jsx";
// Manavana
import AppelsOffres from "./components/acquisition/AppelsOffres.jsx";
import CreationAppelOffre from "./components/acquisition/CreationAppelOffre.jsx";
import DetailAppelOffre from "./components/acquisition/DetailAppelOffre.jsx";
import GestionAcquisition from "./pages/GestionAcquisition.jsx";
import Principale from "./pages/Personnel/principale.jsx";
import Offers from "./components/acquisition/Offres.jsx";
import Marche from "./components/acquisition/Marche.jsx";
import Fournisseurs from "./components/acquisition/Fournisseur.jsx";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Index />}></Route>

        <Route path="/personnel">
          <Route path="login" element={<LoginPersonnel />}></Route>
          <Route path="password" element={<MotDePassePage />}></Route>
        </Route>
{/*??????????????????????*/}
        <Route path="/fournisseur">
          <Route path="signup" element={<InscriptionFournisseur />} />
          <Route path="login" element={<LoginFournisseur />} />
        </Route>

        <Route path="/admin">
          <Route path="login" element={<LoginPersonnel />}></Route>
          <Route path="password" element={<MotDePassePage />}></Route>

          <Route path="u">
            <Route path="" element={<Dashboard />} />
            <Route path="personnel" element={<AdminPersonnel />} />
            <Route path="personnel/:id" element={<EditPersonnel />} />
          </Route>
        </Route>

        <Route path="/personnel/:id">
          <Route path="" element={<Principale />}>
            <Route path="acquisition" element={<GestionAcquisition />}>
              <Route path="appelsoffres" element={<AppelsOffres />}/>
              <Route
                path="appelsoffres/:idAppel"
                element={<DetailAppelOffre />}
                /> 
              <Route
                path="creationappelsoffres"
                element={<CreationAppelOffre />}
                />
              <Route path="offres" element={<Offers />} />
              <Route path="marche" element={<Marche />} />
              <Route path="fournisseurs" element={<Fournisseurs />} />
            </Route>
          </Route>
        </Route>
        {/* Manavana */}
      </Routes>
  );
}

export default App;
