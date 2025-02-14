import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ServiceSlider from './components/ServiceSlider';
import Explore from './pages/Explore'; 
import BecomeSeller from './pages/BecomeSeller'; 
import SignIn from './pages/SignIn'; 
import Join from './pages/Join'; 
import Footer from './components/Footer';
import WebDevelopment from './pages/services/WebDevelopment';
import GraphicDesign from './pages/services/GraphicDesign';
import ContentWriting from './pages/services/ContentWriting';
import DigitalMarketing from './pages/services/DigitalMarketing';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<Join />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/content-writing" element={<ContentWriting />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
    
    </>
  );
}

export default App;
