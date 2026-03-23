/**
 * App.jsx
 * Root application component.
 * Sets up React Router DOM with all page routes.
 * Navbar and Footer wrap every page for consistent layout.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Voucher from './pages/Voucher'

export default function App() {
  return (
    <BrowserRouter>
      {/* Sticky navbar sits above all page content */}
      <Navbar />

      {/* Main page content — grows to fill available space */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/voucher" element={<Voucher />} />
        </Routes>
      </main>

      {/* Footer sits at the bottom of every page */}
      <Footer />
    </BrowserRouter>
  )
}
