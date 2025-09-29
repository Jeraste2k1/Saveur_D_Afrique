import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, MapPin, ShoppingCart, Truck, History, Star } from 'lucide-react';

const DashboardSidebar = () => {
  const navLinks = [
    { to: 'profile', icon: User, label: 'Mon Profil' },
    { to: 'delivery-address', icon: MapPin, label: 'Adresse de livraison' },
    { to: 'cart', icon: ShoppingCart, label: 'Mon Panier' },
    { to: 'order-tracking', icon: Truck, label: 'Suivi de ma commande' },
    { to: 'order-history', icon: History, label: 'Historique des commandes' },
    { to: 'reviews', icon: Star, label: 'Avis & Notations' },
  ];

  return (
    <div className="w-full md:w-64">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-orange-500 text-white font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`
              }
            >
              <link.icon className="w-5 h-5" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;