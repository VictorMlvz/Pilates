import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacto from './pages/Contacto';
import logo from './Logo.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDF6F6] overflow-x-hidden">
        {/* Navbar fija */}
        <nav className="fixed w-full bg-white/85 backdrop-blur-sm z-50">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <Link to="/" className="text-xl font-serif text-[#EA899A]">
              <img src={logo} alt="Logo"  className="h-20"/>
            </Link>

            {/* Menú de escritorio */}
            <div className="hidden md:flex gap-8 text-[#EA899A]">
              <Link to="/" className="hover:text-[#A68977]">Inicio</Link>
              <Link to="/sobre-nosotras" className="hover:text-[#A68977]">Nosotras</Link>
              <Link to="/contacto" className="hover:text-[#A68977]">Agenda</Link>
            </div>

            {/* Botón para menú móvil */}
            <button 
              onClick={toggleMenu} 
              className="md:hidden text-[#EA899A]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="flex flex-col gap-4 px-6 py-4 text-[#EA899A]">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#A68977]"
                >
                  Inicio
                </Link>
                <Link 
                  to="/sobre-nosotras" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#A68977]"
                >
                  Nosotras
                </Link>
                <Link 
                  to="/contacto" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="hover:text-[#A68977]"
                >
                  Contacto
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Contenido de la página (se agrega padding-top para evitar superposición con la navbar) */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotras" element={<About />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;