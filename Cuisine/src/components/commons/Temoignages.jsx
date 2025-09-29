import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Témoignages = () => {
  const testimonials = [
    {
      id: 1,
      name: "Albert Guy",
      text: "Parcourez notre menu, sélectionnez vos plats préférés et validez votre panier en quelques clics. Parcourez notre menu, sélectionnez vos plats préférés et validez votre panier en quelques clics.",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "Marie Dupont",
      text: "Une expérience culinaire exceptionnelle ! La qualité des plats et la rapidité de livraison m'ont vraiment impressionnée. Je recommande vivement cette plateforme.",
      avatar: "👩‍🍳"
    },
    {
      id: 3,
      name: "Jean Martin",
      text: "Service impeccable, plats délicieux et interface très intuitive. C'est devenu ma solution préférée pour commander mes repas quotidiens.",
      avatar: "👨‍🎓"
    },
    {
      id: 4,
      name: "Sophie Bernard",
      text: "La diversité des restaurants disponibles et la facilité de commande font de cette app mon choix numéro un. Livraison toujours à l'heure !",
      avatar: "👩‍💻"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Section gauche avec titre et témoignages */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8">
              Ce qu'ils disent de nous
            </h2>
            
            {/* Conteneur du témoignage et des indicateurs (positionné) */}
            <div className="relative overflow-hidden min-h-[220px] pb-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <div className="p-6 rounded-lg">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{currentTestimonial.text}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                          {currentTestimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {currentTestimonial.name}
                          </h4>
                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-sm">⭐</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* NOUVEAU: Les indicateurs sont en dehors de la motion.div */}
              <div className="absolute bottom-0 right-0 z-10 flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex 
                        ? 'bg-orange-500' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Section droite avec image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="premium_photo-1695297515151-b2af3a60008d.avif"
                alt="Restaurant cuisine"
                className="w-full h-[400px] object-cover"
              />
              
              {/* Overlay décoratif */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-orange-300 rounded-full opacity-30"></div>
            </div>
            
            {/* Élément décoratif */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Témoignages;