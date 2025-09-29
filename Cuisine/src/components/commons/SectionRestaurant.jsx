import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Restau = () => {
  const restaurants = [
    {
      id: 1,
      name: "Chez Maman Béatrice",
      description: "Restaurant familial spécialisé dans la cuisine traditionnelle béninoise",
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
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Le Palais du Goût",
      description: "Cuisine béninoise moderne dans un cadre élégant",
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
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Saveurs d'Afrique",
      description: "Spécialités régionales du Bénin dans une ambiance authentique",
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
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center"
    },
    {
      id: 4,
      name: "Chez Tante Adjoavi",
      description: "Spécialiste des grillades et plats rapides",
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
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop&crop=center"
    }
  ];

  return (
    <div className="bg-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header avec animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-orange-500 font-bold mb-2 uppercase tracking-wide animate-bounce-subtle">
            Nos Partenaires
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Nos Restaurants Partenaires
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid des restaurants avec animations échelonnées */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {restaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="animate-slide-in-up group"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'both'
              }}
            >
              <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 py-0 pb-6 hover:scale-105 border-0 bg-white overflow-hidden">
                {/* Image du restaurant */}
                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-t-2xl"></div>

                  {/* Badge populaire sur l'image */}
                  {restaurant.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-orange-500 text-white animate-pulse">
                        Populaire
                      </Badge>
                    </div>
                  )}
                </div>


                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                    {restaurant.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {restaurant.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(restaurant.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {restaurant.rating} ({restaurant.reviewCount} avis)
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-red-600">
                    <MapPin className="w-4 h-4 flex-shrink-0 " />
                    <span className="text-sm">{restaurant.location}</span>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-2 text-green-600">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{restaurant.openTime}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2 text-blue-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{restaurant.phone}</span>
                  </div>

                  {/* Specialty Badge */}
                  <div className="pt-2">
                    <Badge variant="outline" className="text-xs">
                      {restaurant.specialty}
                    </Badge>
                  </div>

                  {/* Services */}
                  <div className="flex gap-2 pt-2">
                    {restaurant.delivery && (
                      <Badge className="text-xs bg-green-100 text-green-800">
                        Livraison
                      </Badge>
                    )}
                    {restaurant.takeaway && (
                      <Badge className="text-xs bg-blue-100 text-blue-800">
                        À emporter
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bouton pour voir tous les restaurants */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          <Link to="/nos-restaurants">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              Explorer nos restaurants
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </div>
  );
};

export default Restau;