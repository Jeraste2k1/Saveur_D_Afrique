import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Clock, Search, Filter, ShoppingCart, Eye } from "lucide-react";
import Navbar from "@/components/commons/NavBar";
import HeaderLayout from "@/layout/HeaderLayout";
import { dishes } from "@/data/data";
import { Link } from "react-router-dom";
import { useCart } from '@/context/CartContext'; // Importation du hook du panier

const Plats = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const { addToCart } = useCart(); // Utilisation du hook pour obtenir la fonction addToCart

  const categories = ["Tous", "Plats Principaux", "Accompagnements", "Desserts", "Boissons"];

  const filteredDishes = dishes.filter(dish => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dish.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || dish.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCartClick = (dish, e) => {
    e.preventDefault();
    e.stopPropagation();
    // Créez un objet avec la bonne structure pour le panier
    const dishForCart = {
      ...dish,
      image: dish.images[0],
      quantity: 1, // Ajoute une quantité par défaut de 1
    };
    addToCart(dishForCart);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header avec le nouveau composant HeaderLayout */}
      <HeaderLayout 
        title="Nos Délicieux Plats"
        subtitle="Explorez notre sélection de mets authentiques préparés avec amour et tradition"
        backgroundImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />

      {/* Filters */}
      <div className="py-8 border-b border-border bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Rechercher un plat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 border-2 border-gray-200 focus:border-orange-400 rounded-xl"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg' 
                      : 'border-2 border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-400'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>  
          </div>
        </div>
      </div>

      {/* Results Count */}
      {searchTerm && (
        <div className="py-4 bg-orange-50 border-b">
          <div className="container mx-auto px-4">
            <p className="text-orange-800">
              <span className="font-bold">{filteredDishes.length}</span> plat(s) trouvé(s) pour "{searchTerm}"
            </p>
          </div>
        </div>
      )}

      {/* Dishes Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 " >
            {filteredDishes.map((dish) => (
              <Card key={dish.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-0 shadow-lg bg-white py-0 pb-5">
                <div 
                  className="aspect-video relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${dish.images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay pour améliorer la lisibilité des badges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 flex gap-2 z-10">
                    {dish.popular && (
                      <Badge className="bg-orange-500 text-white px-3 py-1 font-semibold">
                        🔥 Populaire
                      </Badge>
                    )}
                    {dish.spicy && (
                      <Badge className="bg-red-500 text-white px-3 py-1 font-semibold">
                        🌶️ Épicé
                      </Badge>
                    )}
                  </div>

                 
                  
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="text-sm font-bold">{dish.rating}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{dish.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {dish.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {dish.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-600">{dish.price}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to={`/plats/${dish.id}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-orange-200 text-orange-700 hover:bg-orange-50 hover:border-orange-400 font-medium py-2"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Voir les détails
                      </Button>
                    </Link>
                    <Button 
                      onClick={(e) => handleAddToCartClick(dish, e)}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDishes.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Aucun plat trouvé
                </h3>
                <p className="text-gray-600 mb-6">
                  Désolé, aucun plat ne correspond à votre recherche "{searchTerm}"
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Tous");
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plats;