import './App.css';
import Footer from "./components/pagetemplate/Footer";
import Navbar from './components/pagetemplate/Navbar';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import OverviewPage from './pages/OverviewPage';
import InputAbaRazzi from './pages/InputAbaRazzi';
import InputAbaStory from './pages/InputAbaStory';
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
        <AuthProvider>
      <BrowserRouter>

    <Navbar/>
    <div className='content'>
    <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/input-abarazzi" element={<InputAbaRazzi />} />
        <Route path="/input-abastory" element={<InputAbaStory />} />
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
