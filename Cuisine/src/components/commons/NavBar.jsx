import { useLocation, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import CartIcon from '@/components/Cart/CartIcon';
import MiniCart from '@/components/Cart/MiniCart';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { User, LogOut } from 'lucide-react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || 'accueil';
  const [showCart, setShowCart] = useState(false);
  
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false); 
  };

  const navItems = [
    { name: 'Accueil', page: 'accueil', path: '/' },
    { name: 'Nos plats', page: 'plats', path: '/plats' },
    { name: 'Restaurant', page: 'nos-restaurants', path: '/nos-restaurants' },
    { name: 'À propos', page: 'a-propos', path: '/a-propos' },
    { name: 'Contact', page: 'contact', path: '/contact' },
  ];

  const getNavLinkClass = (page) => {
    return `
      font-semibold px-3 py-2 transition-all duration-300
      relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300
      hover:after:w-full
      ${currentPage === page
        ? 'text-orange-500 after:w-full'
        : 'text-gray-700 hover:text-orange-500'
      }
    `;
  };

  const getMobileNavLinkClass = (page) => {
    return `
      block px-4 py-3 text-lg font-medium transition-colors duration-300 rounded-lg
      ${currentPage === page
        ? 'bg-orange-500 text-white'
        : 'text-gray-800 hover:bg-gray-100'
      }
    `;
  };

  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200"
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              <div className="relative w-6 h-6">
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </div>
            </button>
          </div>

          <div className="flex-1 flex justify-center lg:justify-start lg:flex-none">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-gray-800">
                Saveur d'<span className="text-orange-500">Afrique</span>
              </h1>
            </Link>
          </div>

          {/* Navigation desktop (visible uniquement sur lg et plus) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8 lg:ml-10">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={item.path}
                className={getNavLinkClass(item.page)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Boutons conditionnels */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <CartIcon onClick={() => setShowCart(true)} />

            {isLoggedIn ? (
              <>
                <Link to="/client" className="hidden sm:inline-block">
                  <Button variant="outline">
                    Tableau de bord
                  </Button>
                </Link>
                <Button 
                                onClick={handleLogout} 
                                variant="ghost" 
                                size="sm"
                                className="text-red-500 hover:bg-red-50 hover:text-red-600"
                              >
                                <LogOut className="w-4 h-4 mr-2" />
                              </Button>
              </>
            ) : (
              <Link to="/auth/login">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Connexion
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Menu mobile/tablette avec animation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white border-t border-gray-100 shadow-lg px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.page}
              to={item.path}
              className={getMobileNavLinkClass(item.page)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {isLoggedIn ? (
            <>
              <Button onClick={() => { navigate('/client'); setIsMobileMenuOpen(false); }} variant="ghost" className="w-full justify-start text-gray-800 hover:bg-gray-100">
                Tableau de bord
              </Button>
              <Button onClick={handleLogout} variant="ghost" className="w-full justify-start text-red-500 hover:bg-red-50">
                Déconnexion
              </Button>
            </>
          ) : (
            <Link to="/auth/login" className="block w-full">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-2">
                Connexion
              </Button>
            </Link>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>

    <MiniCart 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
      />
    </>
  );
};