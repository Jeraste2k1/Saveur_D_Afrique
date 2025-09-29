import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
                          <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold text-white">
                            Saveur d'<span className="text-orange-500">Afrique</span>
                          </h1>
                        </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Découvrez la richesse des saveurs africaines. Nous préparons des plats authentiques avec passion pour vous offrir une expérience culinaire inoubliable, directement chez vous.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors duration-300">À Propos de Nous</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors duration-300">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-orange-500 transition-colors duration-300">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contactez-Nous</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                <address className="not-italic">123, Rue des Saveurs, Cotonou, Bénin</address>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+229 12 34 56 78</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>contact@afrifoods.com</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Suivez-Nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <Facebook className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-800 mt-12 pt-8"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-gray-500">
          <p className="mb-4 md:mb-0">&copy; 2024 AfriFoods. Tous droits réservés.</p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors duration-300">Politique de Confidentialité</Link>
            <Link to="/terms" className="hover:text-orange-500 transition-colors duration-300">Conditions d'Utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;