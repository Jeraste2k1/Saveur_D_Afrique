import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import CartIcon from '@/components/Cart/CartIcon';
import MiniCart from '@/components/Cart/MiniCart';
import { User, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const DashboardNavBar = () => {
  const [showCart, setShowCart] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getInitials = (name) => {
    if (!name) return "CL"; // 'CL' pour client si le nom est indisponible
    const parts = name.split(" ");
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name[0].toUpperCase();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Nom du site à gauche */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Saveur d'<span className="text-orange-500">Afrique</span>
                </h1>
              </Link>
            </div>

            {/* Panier, utilisateur et déconnexion à droite */}
            <div className="flex items-center space-x-4">
              <CartIcon onClick={() => setShowCart(true)} />

              {user && (
                <Link to="/client/profile" className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback className="bg-orange-500 text-white font-semibold">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-gray-800 font-medium hidden sm:inline">
                    {user.name || "Client"}
                  </span>
                </Link>
              )}

              <Button 
                onClick={handleLogout} 
                variant="ghost" 
                size="sm"
                className="text-red-500 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <MiniCart 
        isOpen={showCart} 
        onClose={() => setShowCart(false)} 
      />
    </>
  );
};

export default DashboardNavBar;