import React from 'react';
import { useCart } from '@/context/CartContext';

const AddToCartButton = ({ dish, className = "" }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      // Utilise l'image si elle est fournie, sinon utilise la première image du tableau
      image: dish.image || (dish.images && dish.images[0]), 
      description: dish.description,
      // Utilise la quantité si elle est fournie, sinon utilise 1 par défaut
      quantity: dish.quantity || 1, 
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`px-4 py-2 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-colors duration-300 ${className}`}
    >
      Ajouter au Panier
    </button>
  );
};

export default AddToCartButton;