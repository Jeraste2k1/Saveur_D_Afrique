import React, { createContext, useContext, useState, useEffect } from 'react';

// Créeation  du contexte pour l'authentification
const AuthContext = createContext(null);

// Provider qui gère l'état de l'utilisateur
export const AuthProvider = ({ children }) => {
  // L'état de l'utilisateur. Initialement, on vérifie s'il y a un token dans le localStorage
  // pour persister la connexion à travers les rechargements de page.
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  // simulation de  la connexion d'un utilisateur
  const login = (userData) => {
    
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    // On retire les informations de l'utilisateur du localStorage et du state
    localStorage.removeItem('user');
    setUser(null);
  };
  
  // Variable pratique pour savoir si l'utilisateur est connecté
  const isLoggedIn = !!user;

  // L'objet de valeur qui sera fourni à tous les composants descendants
  const value = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personnalisé pour accéder facilement au contexte
export const useAuth = () => {
  return useContext(AuthContext);
};