import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dishes } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, ChevronLeft, Home, ShoppingCart, Plus, Minus, Eye } from "lucide-react";
import AddToCartButton from "@/components/Cart/AddToCartButton";
import Navbar from "@/components/commons/NavBar";
import MiniCart from "@/components/Cart/MiniCart";

const PlatDetail = () => {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  if (!dish) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-xl text-muted-foreground">Plat non trouvé</p>
    </div>
  );

  // Tous les autres plats, à l'exception du plat actuel, limités à 4
  const relatedProducts = dishes.filter(d => d.id !== dish.id).slice(0, 4);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };
  
  // Créer un objet plat avec la quantité sélectionnée
  const dishWithQuantity = { ...dish, quantity: quantity };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCartClick={() => setIsMiniCartOpen(true)} />
      <MiniCart isOpen={isMiniCartOpen} onClose={() => setIsMiniCartOpen(false)} />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-orange-600 transition-colors flex items-center">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link to="/plats" className="hover:text-orange-600 transition-colors">
              Plats
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{dish.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/plats" 
          className="inline-flex items-center text-muted-foreground hover:text-orange-600 transition-colors mb-8 group"
        >
          <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux plats
        </Link>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square overflow-hidden rounded-xl border border-border shadow-lg">
              <img
                src={dish.images[selectedImageIndex]}
                alt={dish.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {dish.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all hover:scale-105 ${
                    selectedImageIndex === index 
                      ? 'border-orange-500 ring-2 ring-orange-200' 
                      : 'border-border hover:border-orange-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${dish.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-3 text-gray-800">{dish.name}</h1>
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(dish.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {dish.rating} / 5
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{dish.time}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                {dish.popular && (
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-3 py-1">
                    🔥 Populaire
                  </Badge>
                )}
                {dish.spicy && (
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 px-3 py-1">
                    🌶️ Épicé
                  </Badge>
                )}
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
              <span className="text-4xl font-bold text-orange-600">{dish.price}</span>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">{dish.description}</p>

            {/* Tags */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800">Ingrédients & Spécialités :</h3>
              <div className="flex flex-wrap gap-2">
                {dish.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-800">Quantité :</span>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    className="h-10 w-10 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <AddToCartButton 
                dish={dishWithQuantity} 
                className="w-full py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3" 
              >
                <ShoppingCart className="w-6 h-6" />
                Ajouter au panier
              </AddToCartButton>

            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">Autres Plats</h2>
              <p className="text-gray-600">Découvrez d'autres délices de notre menu</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(product => (
                <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-md">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bold text-xl text-orange-600">{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <Link to={`/plats/${product.id}`}>
                      <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50">
                        Voir les détails
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatDetail;