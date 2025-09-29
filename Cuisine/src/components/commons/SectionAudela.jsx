import React from 'react';
import { ChefHat, Heart, Timer, Truck } from 'lucide-react';

export default function AuDelaAssiette() {
  const features = [
    {
      id: 1,
      title: "Cuisine de qualité",
      description: "Des ingrédients frais et de première qualité pour des plats exceptionnels",
      icon: ChefHat,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 2,
      title: "Saveurs authentiques",
      description: "Recettes traditionnelles transmises de génération en génération",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    },
    {
      id: 3,
      title: "Préparation sur mesure",
      description: "Chaque plat est préparé avec soin selon vos préférences",
      icon: Timer,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 4,
      title: "Livraison rapide",
      description: "Service de livraison efficace pour recevoir vos plats chauds",
      icon: Truck,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative">
      <style>
        {`
          /* Animation pointillés */
          .animated-dash {
            stroke-dasharray: 8 6;
            stroke-width: 3;
            animation: dashmove 1s linear infinite;
          }
          @keyframes dashmove {
            to {
              stroke-dashoffset: -14;
            }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Au-delà de l'<span className="text-orange-500">assiette</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Features */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-4 gap-8 relative items-start">
            {/* Ligne horizontale en SVG */}
            <svg
              className="absolute top-[2.68rem] left-0 right-0 w-full h-2"
              style={{ zIndex: 0 }}
            >
              <line
                x1="12%"
                x2="88%"
                y1="1"
                y2="1"
                stroke="#f97316"
                className="animated-dash"
              />
            </svg>

            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.id} className="text-center relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative">
            {/* Ligne verticale en SVG */}
            <svg className="absolute left-8 top-0 bottom-0 h-full w-2 z-0">
              <line
                x1="1"
                x2="1"
                y1="5%"
                y2="95%"
                stroke="#f97316"
                className="animated-dash"
              />
            </svg>

            <div className="space-y-8 relative z-10">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.id} className="flex items-start space-x-4">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
