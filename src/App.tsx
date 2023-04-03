import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavoritiesPage from "./pages/FavoritesPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorities" element={<FavoritiesPage />} />
      </Routes>
    </>
  );
}

export default App;
