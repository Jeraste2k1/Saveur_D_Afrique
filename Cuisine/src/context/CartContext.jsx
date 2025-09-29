import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Créer le contexte
const CartContext = createContext();

// Actions pour le reducer
const cartActions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  LOAD_CART: 'LOAD_CART'
};

// Reducer pour gérer l'état du panier
const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_ITEM:
      const { id, quantity = 1 } = action.payload; // Utilise la quantité fournie, ou 1 par défaut
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity }]
      };

    case cartActions.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case cartActions.UPDATE_QUANTITY:
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0); // Supprime les articles dont la quantité est 0

      return {
        ...state,
        items: updatedItems
      };

    case cartActions.CLEAR_CART:
      return { items: [] };

    case cartActions.LOAD_CART:
      return { items: action.payload || [] };

    default:
      return state;
  }
};

// Provider du contexte panier
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Charger le panier depuis localStorage au démarrage
  useEffect(() => {
    const savedCart = localStorage.getItem('africFood_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: cartActions.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error('Erreur lors du chargement du panier:', error);
        // Si les données sont corrompues, on initialise le panier à vide
        dispatch({ type: cartActions.CLEAR_CART });
      }
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    try {
      localStorage.setItem('africFood_cart', JSON.stringify(state.items));
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du panier:', error);
    }
  }, [state.items]);

  const addToCart = (item) => {
    dispatch({ type: cartActions.ADD_ITEM, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: cartActions.REMOVE_ITEM, payload: itemId });
  };

  const updateQuantity = (itemId, quantity) => {
    dispatch({ type: cartActions.UPDATE_QUANTITY, payload: { id: itemId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: cartActions.CLEAR_CART });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

const getTotalPrice = () => {
  return state.items.reduce((total, item) => {
    let price = 0;
    if (typeof item.price === 'string') {
        // Supprime tout ce qui n'est pas un chiffre ou un point
        price = parseFloat(item.price.replace(/[^\d.]/g, ''));
    } else if (typeof item.price === 'number') {
        price = item.price;
    }
    
    // Si la conversion échoue, parseFloat retourne NaN. On le ramène à 0.
    if (isNaN(price)) {
      price = 0;
    }

    return total + (price * item.quantity);
  }, 0);
};

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé dans un CartProvider');
  }
  return context;
};