// src/components/cart/MiniCart.jsx
import React from "react";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext"; // Importez le hook d'authentification
import { useNavigate } from "react-router-dom";

const MiniCart = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const { isLoggedIn } = useAuth(); // Utilisation du hook useAuth
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Fonction pour gérer le clic sur le bouton de commande
  const handleCheckout = () => {
    onClose();
    if (isLoggedIn) {
      // Si l'utilisateur est connecté, redirigez-le vers la page de paiement
      navigate("/client/checkout");
    } else {
      // S'il n'est pas connecté, redirigez-le vers la page de connexion
      navigate("/auth/login");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end px-4 pt-16">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-opacity-30"
        onClick={onClose}
      ></div>

      {/* Mini cart */}
      <div className="relative z-50 bg-white rounded-lg shadow-xl w-full max-w-md max-h-[85vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Mon Panier</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contenu */}
        {items.length === 0 ? (
          <div className="p-6 text-center">
            <ShoppingCart className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">Votre panier est vide</p>
          </div>
        ) : (
          <>
            {/* Liste des items */}
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-orange-600 font-bold">
                      {item.price.toLocaleString()} FCFA
                    </p>

                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="px-2">{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total :</span>
                <span className="font-bold text-lg text-orange-600">
                  {getTotalPrice().toLocaleString()} FCFA
                </span>
              </div>

              <Button
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                onClick={handleCheckout}
              >
                Passer la Commande
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MiniCart;