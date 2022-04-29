import Index from "./pages/acceuil.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import GestionAcquisition from "./pages/GastionAcquisition.jsx";
import Principale from "./pages/Personnel/principale.jsx";
import Offers from "./components/acquisition/Offres.jsx";
import Marche from "./components/acquisition/Marche.jsx";
import Fournisseurs from "./components/acquisition/Fournisseur.jsx";
import GestionStock from "./pages/GestionStock.jsx";
import ArticlesGenerique from "./components/stock/articlesGenerique.jsx";
import ModifierGenerique from "./components/stock/editArticleGenerique.jsx";
import Articles from "./components/stock/articles.jsx";
import EditArticle from "./components/stock/editArticle.jsx";
import CreeArticle from "./components/stock/creeArticle.jsx";
import CreeArticleGenerique from "./components/stock/creeArticleGenerique.jsx";
import Notifications from "./components/stock/notifications.jsx";
import Reclamation from "./pages/GestionReclamation.jsx";
import Garanties from "./components/reclamation/Garanties.jsx";
import ArticleDetails from "./components/reclamation/ArticleDetails.jsx";
import CreerGarantie from "./components/reclamation/CreeGarantie.jsx";
function App() {
  return (
    <Router>
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
            <Route path="acquisition" element={<GestionAcquisition />}>
              <Route path="appelsoffres" element={<AppelsOffres />}></Route>
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

            <Route path="stock" element={<GestionStock />}>
              <Route path="categories" element={<ArticlesGenerique />} />
              <Route
                path="categories/:idCat"
                element={<ModifierGenerique />}
              ></Route>
              <Route
                path="categories/:idCat/articles"
                element={<Articles />}
              ></Route>
              <Route
                path="categories/:idCat/articles/:idArticle"
                element={<EditArticle />}
              ></Route>
              <Route
                path="nouvelleCategorie"
                element={<CreeArticleGenerique />}
              ></Route>
              <Route path="nouveauArticle" element={<CreeArticle />} />
              <Route path="notifications" element={<Notifications />} />
            </Route>

            <Route path="reclamation" element={<Reclamation />}>
              <Route path="garanties" element={<Garanties />} />
              <Route path="articles">
                <Route path=":idArtilce" element={<ArticleDetails />} />{" "}
              </Route>
              <Route path="nouvelleGarantie" element={<CreerGarantie />} />
            </Route>
          </Route>
        </Route>
        {/* Manavana */}
      </Routes>
    </Router>
  );
}

export default App;
