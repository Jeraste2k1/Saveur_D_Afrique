// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll tout en haut à chaque changement de route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
