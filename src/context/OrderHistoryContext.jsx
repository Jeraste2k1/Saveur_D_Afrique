import React, { createContext, useContext, useState } from 'react';

const OrderHistoryContext = createContext();

export const OrderHistoryProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Fonction pour ajouter une nouvelle commande
  const addOrder = (newOrder) => {
    // on ajoute la nouvelle commande au début de la liste
    setOrders(prevOrders => [newOrder, ...prevOrders]); 
  };
  
  // on retire le total du panier de la page de commande pour l'ajouter a l'historique de commande
  const removeOrder = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };
  
  // on clear l'historique de commande
  const clearOrderHistory = () => {
    setOrders([]);
  };

  return (
    <OrderHistoryContext.Provider value={{ orders, addOrder, removeOrder, clearOrderHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
};

export const useOrderHistory = () => {
  return useContext(OrderHistoryContext);
};