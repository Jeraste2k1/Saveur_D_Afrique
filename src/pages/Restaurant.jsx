import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import HeaderLayout from "../layout/HeaderLayout";
import { restaurants } from "@/data/restaurantData";
import NavBar from "../components/commons/NavBar";
import { Link } from "react-router-dom";



const Restaurants = () => {
 
  return (
    <div className="min-h-screen bg-background">
      <NavBar/>
      <HeaderLayout 
        title="Nos Restaurants Partenaires"
        subtitle="Découvrez une sélection soigneuse de restaurants authentiques qui perpétuent la richesse culinaire africaine avec passion et savoir-faire"
        backgroundImage="/restaurant_header.jpg"
      />

      {/* Restaurants Grid */}
      <div className="py-12">
        <div className="container mx-auto px-4 ">
          <div className="grid lg:grid-cols-2 gap-8 ">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="group hover:shadow-card transition-all duration-300 overflow-hidden py-0 pb-8">
                <div 
                  className="h-48 relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${restaurant.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay pour améliorer la lisibilité */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    {restaurant.popular && (
                      <Badge className="bg-red-400 hover:bg-red-700 text-white">
                        Populaire
                      </Badge>
                    )}
                    <Badge variant="secondary" className="bg-white/90 text-gray-800 border-white/30">
                      {restaurant.specialty}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="text-sm font-medium">{restaurant.rating}</span>
                        <span className="text-sm text-white/80">({restaurant.reviewCount} avis)</span>
                      </div>
                      <div className="flex items-center gap-1 font-bold text-green-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{restaurant.openTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{restaurant.name}</CardTitle>
                  <CardDescription className="text-base">
                    {restaurant.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2 text-red-500">
                    <MapPin className="w-4 h-4  mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{restaurant.location}</p>
                      <p className="text-sm text-red-500">{restaurant.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-blue-600">
                    <Phone className="w-4 h-4 " />
                    <span className="text-sm">{restaurant.phone}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {restaurant.delivery && (
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Livraison
                      </Badge>
                    )}
                    {restaurant.takeaway && (
                      <Badge variant="outline" className="text-blue-600 border-blue-200">
                        À emporter
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                   <Link to={`/restaurants/${restaurant.id}/menu`} className="flex-1">
                      <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                        Voir le menu
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1 border-orange-600 text-orange-600 hover:bg-orange-50">
                      Plus d'infos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Vous êtes restaurateur ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez notre réseau de partenaires et faites découvrir votre cuisine à de nouveaux clients
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
            Devenir partenaire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;