/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import QueEsEssenda from './pages/QueEsEssenda';
import Acompanamientos from './pages/Acompanamientos';
import SobreMi from './pages/SobreMi';
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/que-es-essenda" element={<QueEsEssenda />} />
            <Route path="/acompanamientos" element={<Acompanamientos />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
