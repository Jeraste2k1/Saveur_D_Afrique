// src/data/Restaurantsdata.js

export const restaurants = [
  {
    id: "1",
    name: "Chez Maman Béatrice",
    description: "Restaurant familial spécialisé dans la cuisine traditionnelle béninoise depuis 1985",
    location: "Cotonou Centre",
    address: "Rue des Cocotiers, Quartier Ganhi",
    phone: "+229 21 30 45 67",
    rating: 4.8,
    reviewCount: 234,
    openTime: "08:00 - 22:00",
    specialty: "Cuisine traditionnelle",
    delivery: true,
    takeaway: true,
    popular: true,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 1,
        category: "Entrées",
        image: "entrée.jpg",
        items: [
          {
            id: 1,
            name: "Salade Africaine",
            price: 3500,
            description: "Mélange de légumes frais et d'épices locales, vinaigrette à l'huile de palme.",
            popular: true
          },
          {
            id: 2,
            name: "Accras de Haricot",
            price: 2000,
            description: "Beignets croustillants à base de haricots, oignons et piments, servis avec une sauce piquante.",
          },
          {
            id: 3,
            name: "Beignets d'Igname",
            price: 2500,
            description: "Délicieux beignets d'igname frits, accompagnés d'une sauce tomate épicée.",
          },
        ],
      },
      {
        id: 2,
        category: "Plats Principaux",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 4,
            name: "Afiassè (Ragoût de Chèvre)",
            price: 6500,
            description: "Ragoût de viande de chèvre mijoté avec des légumes de saison et des épices traditionnelles.",
            popular: true
          },
          {
            id: 5,
            name: "Gbogbo (Couscous de Maïs)",
            price: 5500,
            description: "Couscous de maïs béninois servi avec une sauce tomate riche et du poisson frit ou de la viande.",
          },
          {
            id: 6,
            name: "Pâté de poulet",
            price: 7000,
            description: "Pâté farci au poulet savoureux, servi avec sa sauce tomate piquante.",
            popular: true
          },
          {
            id: 7,
            name: "Fufu au Gombo",
            price: 6000,
            description: "Pâte de manioc ou d'igname accompagnée d'une sauce Gombo gluante et onctueuse.",
          },
        ],
      },
      {
        id: 3,
        category: "Grillades",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 8,
            name: "Poisson Braisé",
            price: 8000,
            description: "Poisson entier grillé, mariné dans des épices locales. Servi avec attiéké et légumes.",
            popular: true
          },
          {
            id: 9,
            name: "Brochettes de Bœuf",
            price: 3500,
            description: "Morceaux de bœuf marinés, grillés à la perfection, accompagnés de frites de plantain.",
          },
          {
            id: 10,
            name: "Poulet Braisé",
            price: 7500,
            description: "Cuisses de poulet braisées, assaisonnées d'herbes aromatiques et de piment.",
          },
        ],
      },
      {
        id: 4,
        category: "Boissons & Desserts",
        image: "victoria-shes-UC0HZdUitWY-unsplash.jpg",
        items: [
          {
            id: 11,
            name: "Jus de Gingembre",
            price: 1500,
            description: "Jus épicé au gingembre, sucré et rafraîchissant.",
          },
          {
            id: 12,
            name: "Bissap",
            price: 1000,
            description: "Boisson à base de fleur d'hibiscus, servie très fraîche.",
            popular: true
          },
          {
            id: 13,
            name: "Bananes Frites au Caramel",
            price: 2500,
            description: "Bananes plantains frites et enrobées de caramel maison, une vraie gourmandise.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Le Palais du Goût",
    description: "Cuisine béninoise moderne avec une touche contemporaine dans un cadre élégant",
    location: "Calavi",
    address: "Avenue de l'Université, Calavi",
    phone: "+229 21 35 89 12",
    rating: 4.6,
    reviewCount: 189,
    openTime: "11:00 - 23:00",
    specialty: "Plats modernes",
    delivery: true,
    takeaway: true,
    popular: false,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 1,
        category: "Starters & Appetizers",
        image: "https://images.unsplash.com/photo-1626082928503-447543f49774?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 14,
            name: "Brochettes de crevette",
            price: 4500,
            description: "Brochettes de crevettes marinées dans une sauce aux épices africaines, servies avec une touche de citron vert.",
            popular: true
          },
          {
            id: 15,
            name: "Mini-rouleaux de printemps",
            price: 3000,
            description: "Mini-rouleaux de printemps aux légumes et à la viande, servis avec une sauce aigre-douce.",
          },
          {
            id: 16,
            name: "Tartare de thon exotique",
            price: 5500,
            description: "Thon frais coupé au couteau, mariné avec mangue, avocat et gingembre.",
          },
        ],
      },
      {
        id: 2,
        category: "Plats Signature",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 17,
            name: "Poulet Yassa revisité",
            price: 8500,
            description: "Poulet mariné au citron et oignons, cuit lentement et servi sur un lit de riz basmati.",
            popular: true
          },
          {
            id: 18,
            name: "Poisson braisé",
            price: 9000,
            description: "Poisson frais braisé à la sauce locale, servi avec des frites de patates douces et une salade croquante.",
          },
          {
            id: 19,
            name: "Riz au Calamar",
            price: 8500,
            description: "Riz sauté avec une sauce au calamar, des légumes croquants et de la viande de bœuf.",
          },
          {
            id: 20,
            name: "Risotto à la noix de coco",
            price: 7800,
            description: "Risotto crémeux infusé à la noix de coco, garni de crevettes grillées et de coriandre.",
          },
        ],
      },
      {
        id: 3,
        category: "Desserts & Boissons",
        image: "https://images.unsplash.com/photo-1563729781442-03487c53d162?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 21,
            name: "Fondant au chocolat et épices",
            price: 4000,
            description: "Gâteau au chocolat fondant, servi avec une touche de piment de Cayenne et de cannelle.",
            popular: true
          },
          {
            id: 22,
            name: "Salade de fruits exotiques",
            price: 3000,
            description: "Assortiment de fruits tropicaux frais et de saison, arrosé d'un sirop de gingembre.",
          },
          {
            id: 23,
            name: "Cocktail au bissap",
            price: 2500,
            description: "Cocktail sans alcool à base de bissap et de fruits tropicaux frais.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Saveurs d'Afrique",
    description: "Découvrez les spécialités régionales du Bénin dans une ambiance authentique",
    location: "Porto-Novo",
    address: "Place Bayol, Porto-Novo",
    phone: "+229 20 21 34 56",
    rating: 4.9,
    reviewCount: 156,
    openTime: "09:00 - 21:00",
    specialty: "Spécialités régionales",
    delivery: true,
    takeaway: false,
    popular: true,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 1,
        category: "Spécialités du Sud",
        image: "https://images.unsplash.com/photo-1605333060233-04e304918e7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 24,
            name: "Djoumgblé",
            price: 5500,
            description: "Riz cuit à la vapeur avec une sauce aux légumes et des morceaux de viande de bœuf.",
          },
          {
            id: 25,
            name: "Akassa",
            price: 4500,
            description: "Pâte de maïs fermentée, servie avec une sauce aux arachides et de la viande fumée.",
          },
        ],
      },
      {
        id: 2,
        category: "Délices du Nord",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 26,
            name: "Wagashi (Fromage)",
            price: 3000,
            description: "Fromage de vache frit, spécialité des Peuls, servi avec une sauce tomate.",
            popular: true
          },
          {
            id: 27,
            name: "Pâte de mil",
            price: 5000,
            description: "Pâte de mil fermentée, accompagnée d'une sauce traditionnelle et de viande.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Chez Tante Adjoavi",
    description: "Cuisine de rue élevée au rang d'art, spécialiste des grillades et plats rapides",
    location: "Parakou",
    address: "Marché Central, Parakou",
    phone: "+229 23 61 78 90",
    rating: 4.7,
    reviewCount: 203,
    openTime: "07:00 - 20:00",
    specialty: "Grillades & Fast Food",
    delivery: false,
    takeaway: true,
    popular: false,
    image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 1,
        category: "Grillades",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 28,
            name: "Brochettes de porc",
            price: 3000,
            description: "Morceaux de porc grillés au feu de bois, assaisonnés d'une marinade spéciale.",
            popular: true
          },
          {
            id: 29,
            name: "Poulet à la braise",
            price: 7000,
            description: "Demi-poulet braisé, servi avec des frites de pomme de terre et une sauce piquante.",
          },
        ],
      },
      {
        id: 2,
        category: "Plats rapides",
        image: "victoria-shes-UC0HZdUitWY-unsplash.jpg",
        items: [
          {
            id: 30,
            name: "Sandwich au poulet grillé",
            price: 2500,
            description: "Un sandwich copieux avec du poulet grillé, de la salade et de la sauce.",
          },
          {
            id: 31,
            name: "Frites de plantain",
            price: 1500,
            description: "Plantains frits et croustillants, accompagnement parfait pour toutes nos grillades.",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Le Jardin des Épices",
    description: "Restaurant bio proposant des plats traditionnels avec des ingrédients locaux",
    location: "Abomey",
    address: "Route d'Abomey Calavi, Abomey",
    phone: "+229 22 50 12 34",
    rating: 4.5,
    reviewCount: 87,
    openTime: "10:00 - 22:00",
    specialty: "Cuisine bio",
    delivery: true,
    takeaway: true,
    popular: false,
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 1,
        category: "Plats Végétariens",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d359?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 32,
            name: "Salade de quinoa et légumes",
            price: 4500,
            description: "Salade fraîche au quinoa, légumes de saison et vinaigrette légère.",
            popular: true
          },
          {
            id: 33,
            name: "Curry de pois chiches",
            price: 5000,
            description: "Curry de pois chiches crémeux et épicé, servi avec du riz complet.",
          },
        ],
      },
      {
        id: 2,
        category: "Plats à base de viande",
        image: "https://images.unsplash.com/photo-1546069901-b4f0b096236b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 34,
            name: "Poulet Fermier Grillé",
            price: 7500,
            description: "Poulet fermier grillé, élevé en plein air, servi avec des légumes du jardin.",
          },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "La Case du Pêcheur",
    description: "Spécialiste des poissons et fruits de mer frais du littoral béninois",
    location: "Grand-Popo",
    address: "Boulevard Maritime, Grand-Popo",
    phone: "+229 24 41 56 78",
    rating: 4.8,
    reviewCount: 142,
    openTime: "12:00 - 23:00",
    specialty: "Poissons & Fruits de mer",
    delivery: true,
    takeaway: true,
    popular: true,
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    menu: [
      {
        id: 1,
        category: "Poissons & Crustacés",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        items: [
          {
            id: 35,
            name: "Poisson Braisé au feu de bois",
            price: 9000,
            description: "Poisson entier grillé, pêché du jour, avec une marinade secrète.",
            popular: true
          },
          {
            id: 36,
            name: "Crevettes à l'ail et au persil",
            price: 8500,
            description: "Crevettes sautées, parfumées à l'ail et au persil, servies avec du riz.",
          },
        ],
      },
      {
        id: 2,
        category: "Plats Locaux",
        image: "entrée.jpg",
        items: [
          {
            id: 37,
            name: "Sauce d'arachide au poisson",
            price: 6000,
            description: "Sauce traditionnelle à base d'arachide, accompagnée de poisson frit et de pâte de maïs.",
          },
        ],
      },
    ],
  },
];