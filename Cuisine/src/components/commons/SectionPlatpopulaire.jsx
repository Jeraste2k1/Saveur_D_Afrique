import AddToCartButton from "../Cart/AddToCartButton";

export default function PopularDishes() {
  const specialDishes = [
    { id:1,
      name: 'Telibo',
      description: 'Savourez notre Telibo traditionnel, riche en goût et préparé avec des ingrédients locaux.',
      price: '2000',
      image: 'telibo.png',
      rating: 4.5,
      likes: '1.2k',
    },
    { id:2,
      name: 'Akassa',
      description: 'Délicieux Akassa béninois accompagné de sauces savoureuses et d’accompagnements frais.',
      price: '1500',
      image: 'Akassa.jpeg',
      rating: 4.8,
      likes: '980',
    },
    {
      id:3,
      name: 'Wassa-Wassa',
      description: 'Goûtez au Wassa-Wassa, spécialité à base de manioc aux saveurs authentiques du Bénin.',
      price: '800',
      image: 'wassa wassa.jpg',
      rating: 4.7,
      likes: '1.5k',
    },
  ];

  return (
    <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-orange-500 font-bold mb-2 uppercase">NOS PLATS SPÉCIAUX</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Nos Plats Spéciaux
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez l'essence de notre excellence culinaire avec nos plats spéciaux. Confectionnés à la main par nos chefs experts, chaque plat présente des saveurs uniques et des ingrédients de haute qualité, créant une expérience culinaire mémorable à chaque visite.
          </p>

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialDishes.map((dish, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border border-orange-500 relative mb-6 hover:bg-orange-200 hover:border-white " >
                <div className="relative ">
                  {/* Image du plat avec un cadre */}
                  <div className="p-2 bg-white rounded-full mx-auto w-36 h-36 border border-gray-200 -mt-16 flex items-center justify-center">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                {/* Icônes et métadonnées */}
                <div className="absolute top-2 right-4 inline-block  lg:flex items-center space-x-2 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 17.27l-5.18 2.73 1-5.83-4.24-4.13 5.86-.85 2.62-5.32 2.62 5.32 5.86.85-4.24 4.13 1 5.83z" />
                      </svg>
                    </span>
                    <span className="text-sm">{dish.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </span>
                    <span className="text-sm">{dish.likes}</span>
                  </div>
                </div>

                {/* Contenu du plat */}
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-2">{dish.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-gray-900">{dish.price} FCFA</span>
                  <AddToCartButton dish={dish} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}