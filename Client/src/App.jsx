import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import HomePage from "./Pages/HomePage";
import EveryOne from "./Pages/EveryOne";

const NO_LAYOUT = ["/every"];

const AppContent = () => {
  const location = useLocation();
  const token = localStorage.getItem("app_token");

  // Token yoxdursa — yalnız /every görünür
  if (!token) {
    return (
      <Routes>
        <Route path="/every" element={<EveryOne />} />
        <Route path="*" element={<Navigate to="/every" replace />} />
      </Routes>
    );
  }

  const hideLayout = NO_LAYOUT.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/"      element={<HomePage />} />
        <Route path="/every" element={<Navigate to="/" replace />} />
        <Route path="*"      element={<Navigate to="/" replace />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
