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
import AppelsOffres from "./components/acquisition/appelsoffres/AppelsOffres.jsx";
import CreationAppelOffre from "./components/acquisition/appelsoffres/CreationAppelOffre.jsx";
import DetailAppelOffre from "./components/acquisition/appelsoffres/DetailAppelOffre.jsx";
import GestionAcquisition from "./pages/GestionAcquisition.jsx";
import Principale from "./pages/Personnel/principale.jsx";
import Offres from "./components/acquisition/offres/Offres.jsx";
import Marche from "./components/acquisition/marches/Marche.jsx";
import { QueryClientProvider,QueryClient } from "react-query";
import Fournisseurs from "./components/acquisition/fournisseurs/Fournisseur.jsx";
import DetailsOffre from "./components/acquisition/offres/DetailsOffre.jsx";
import CreationOffre from "./components/acquisition/offres/CreationOffre.jsx";
import TableauDeBordAcquisition from "./components/acquisition/TableauDeBordAcquisition.jsx";
//Gestion ticket import
import DetailsTicket from "./components/ticket/DetailsTicket.jsx"
import ListTickets from "./components/ticket/ListTickets.jsx"
import GestionTickets from "./pages/GestionTickets.jsx"
const queryClient=new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
              <Route path="" element={<TableauDeBordAcquisition/>}/>
              <Route path="appelsoffres" element={<AppelsOffres />}/>
              <Route
                path="appelsoffres/:idAppel"
                element={<DetailAppelOffre />}
                /> 
              <Route
                path="creationappelsoffres"
                element={<CreationAppelOffre />}
                />
              <Route path="offres" element={<Offres/>} />
              <Route
                path="offres/:idOffre"
                element={<DetailsOffre/>}
              />
              <Route
                path="creationoffres"
                element={<CreationOffre/>}
              />
              <Route path="marche" element={<Marche />} />
              <Route path="fournisseurs" element={<Fournisseurs />} />
            </Route>
            <Route path="ticket_reclamation" element={<GestionTickets/>}>
              <Route path="" element={<ListTickets/>}/>
              <Route path=":idTicket" element={<DetailsTicket/>}/>
            </Route>
          </Route>
        </Route>
        {/* Manavana */}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
