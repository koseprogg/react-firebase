import './App.css';
import Footer from "./components/pagetemplate/Footer";
import Navbar from './components/pagetemplate/Navbar';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import OverviewPage from './pages/OverviewPage';
import InputAbaRazzi from './pages/InputAbaRazzi';
import InputAbaStory from './pages/InputAbaStory';
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>

    <Navbar/>
    <div className='content'>
    <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/input-abarazzi" element={<InputAbaRazzi />} />
          <Route path="/input-abastory" element={<InputAbaStory />} />
        </Route>
    </Routes>

    </div>
    <div className='footer'>
      <Footer/>
    </div>
    </BrowserRouter>
    </AuthProvider>

  </>
  );
}

export default App;
