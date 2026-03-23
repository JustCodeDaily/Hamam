import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileBookingBar from './components/layout/MobileBookingBar';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Vouchers from './pages/Vouchers';
import About from './pages/About';
import Contact from './pages/Contact';

/**
 * App - Main application component with routing
 *
 * Routes:
 * / → Home
 * /anwendungen → Services
 * /gutschein → Vouchers
 * /ueber-uns → About
 * /kontakt → Contact
 *
 * Features:
 * - Persistent navbar and footer
 * - Mobile booking bar on mobile devices
 * - Scroll to top on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anwendungen" element={<Services />} />
        <Route path="/gutschein" element={<Vouchers />} />
        <Route path="/ueber-uns" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
      <MobileBookingBar />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
