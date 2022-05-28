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
import AuthGuard from "./auth/AuthGuard.jsx";
import { AuthProvider } from "./contexts/JWTAuthContext.js"
import { QueryClientProvider,QueryClient } from "react-query";
//GestionAcquiqition Import
import AppelsOffres from "./components/acquisition/appelsoffres/AppelsOffres.jsx";
import CreationAppelOffre from "./components/acquisition/appelsoffres/CreationAppelOffre.jsx";
import DetailAppelOffre from "./components/acquisition/appelsoffres/DetailAppelOffre.jsx";
import GestionAcquisition from "./pages/GestionAcquisition.jsx";
import Principale from "./pages/Personnel/principale.jsx";
import Offres from "./components/acquisition/offres/Offres.jsx";
import Marches from "./components/acquisition/marches/Marches.jsx";
import CreationMarche from "./components/acquisition/marches/CreationMarche.jsx";
import DetailsMarche from "./components/acquisition/marches/DetailsMarche.jsx";
import Fournisseurs from "./components/acquisition/fournisseurs/Fournisseurs.jsx";
import DetailsFournisseur from "./components/acquisition/fournisseurs/DetailsFournisseur.jsx";
import DetailsOffre from "./components/acquisition/offres/DetailsOffre.jsx";
import CreationOffre from "./components/acquisition/offres/CreationOffre.jsx";
import TableauDeBordAcquisition from "./components/acquisition/TableauDeBordAcquisition.jsx";
//Gestion ticket import
import DetailsTicket from "./components/ticket/DetailsTicket.jsx"
import ListTickets from "./components/ticket/ListTickets.jsx"
import GestionTickets from "./pages/GestionTickets.jsx"
//Gestion Affectation imports
import GestionAffectations from "./pages/GestionAffectations.jsx"
import ListAffectations from "./components/affectation/ListAffectations.jsx";
import CreationAffectation from "./components/affectation/CreationAffectation.jsx";
import DetailsAffectation from "./components/affectation/DetailsAffectation.jsx";
//Gestion Rebut imports
import GestionRebut from "./pages/GestionRebut.jsx";
import Acheteurs from "./components/rebut/Acheteurs.jsx";
import ListRebuts from "./components/rebut/ListRebuts.jsx";
import CreationRebut from "./components/rebut/CreationRebut.jsx";


const queryClient=new QueryClient();
function App() {
  return (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Index />}></Route>

        <Route path="/personnel">
          <Route path="login" element={<LoginPersonnel />}></Route>
          <Route path="password" element={<MotDePassePage />}></Route>
        </Route>
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
            {/*Gestion Acquisition*/}
            <Route path="acquisition" element={
            <AuthGuard ROLE="ACQUISITION">
              <GestionAcquisition />
            </AuthGuard>
              }>
              <Route path="" element={<TableauDeBordAcquisition/>}/>
              {/* appeloffres */}
              <Route path="appelsoffres" element={<AppelsOffres />}/>
              <Route path="appelsoffres/:idAppel" element={<DetailAppelOffre />}/> 
              <Route path="creationappelsoffres" element={<CreationAppelOffre />}/>
              {/* offres */}
              <Route path="offres" element={<Offres/>} />
              <Route path="offres/:idOffre" element={<DetailsOffre/>}/>
              <Route path="creationoffres" element={<CreationOffre/>}/>
              {/* marches */}
              <Route path="marches" element={<Marches/>} />
              <Route path="marches/:idMarche" element={<DetailsMarche/>}/>
              <Route path="creationmarches" element={<CreationMarche/>}/>
              {/* fournisseur */}
              <Route path="fournisseurs" element={<Fournisseurs />} />
              <Route path="fournisseurs/:idFournisseur" element={<DetailsFournisseur/>} />
            </Route>
            {/*gestion ticket*/}
            <Route path="ticket_reclamation" element={
            <AuthGuard ROLE="RECLAMATION">
              <GestionTickets/>
            </AuthGuard>
            }>
              <Route path="" element={<ListTickets/>}/>
              <Route path=":idTicket" element={<DetailsTicket/>}/>
            </Route>
            {/*Gestion affectation*/}
            <Route path="affectation" element={
            <AuthGuard ROLE="AFFECTATION"> 
              <GestionAffectations/>
            </AuthGuard>
            }>
              <Route path="" element={<ListAffectations/>}/>
              <Route path=":idAffectation" element={<DetailsAffectation/>}/>
              <Route path="creation" element={<CreationAffectation/>}/>
            </Route>
            {/* Gestion rebut */}
            <Route path="rebut" element={
            <AuthGuard ROLE="REBUT">
              <GestionRebut/>
            </AuthGuard>
            }>
              <Route path="" element={<ListRebuts/>}/>
              <Route path="creation_rebut" element={<CreationRebut/>}/>
              <Route path="acheteurs" element={<Acheteurs/>}/>
            </Route>
          </Route>
        </Route>
        {/* Manavana */}
      </Routes>
    </QueryClientProvider>
  </AuthProvider>
  );
}

export default App;
