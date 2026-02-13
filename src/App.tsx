import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import PrivacyPolicy from './privacy-policy'
import TermsOfService from './terms-of-service'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
