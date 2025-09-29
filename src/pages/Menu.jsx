import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NavBar from "@/components/commons/NavBar";
import { restaurants } from "@/data//restaurantData";
import Footer from "@/components/commons/Footer";
import AddToCartButton from "@/components/Cart/AddToCartButton";

const Menu = () => {
  const { restaurantId } = useParams();

  // Données fictives de restaurants, enrichies avec des images de catégorie
 
  
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Restaurant non trouvé.</p>
      </div>
    );
  }

  const menuCategories = restaurant.menu;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <NavBar />
      
      {/* Header section with image and title */}
      <div className="relative text-center text-white py-24" style={{ backgroundImage: `url(${restaurant.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4">
         
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">{restaurant.name}</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto">{restaurant.description}</p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span>{restaurant.rating}</span>
              <span className="opacity-80">({restaurant.reviewCount} avis)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content - Menu sections */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Top description section, matching the image */}
           
         <Link to="/nos-restaurants">
            <Button variant="ghost" className="bg-orange-700 text-white  mb-8">
              <ChevronLeft className="w-4 h-4 mr-2" /> Retour
            </Button>
          </Link>

          {/* Menu Categories Grid with alternating layouts */}
          {menuCategories.map((category, index) => {
            const isLeftImage = index % 2 === 0; // Alterner la position de l'image

            return (
              <div key={category.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center`}>
                {/* Image décorative - Toujours en premier sur mobile */}
                <div className={`flex justify-center ${isLeftImage ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative w-80 h-80 max-w-full">
                    <img
                      src={category.image.startsWith('http') ? category.image : `/${category.image}`}
                      alt={category.category}
                      className="w-full h-full object-cover rounded-t-full shadow-lg"
                    />
                  </div>
                </div>

                {/* Contenu (textes et plats) */}
                <div className={`${isLeftImage ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Titre de la catégorie au-dessus du contenu */}
                  <div className="flex items-center justify-center mb-8 relative">
                    <div className="w-12 h-1 bg-red-500 absolute top-1/2 transform -translate-y-1/2 left-0 z-0"></div>
                    <h3 className="text-3xl font-bold text-gray-800 relative z-10 px-4 bg-white">
                      {category.category}
                    </h3>
                    <div className="w-12 h-1 bg-red-500 absolute top-1/2 transform -translate-y-1/2 right-0 z-0"></div>
                  </div>
                  
                  <div className="space-y-6">
                    {category.items.map((item) => (
                      <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="text-lg font-semibold text-gray-800">
                              {item.name}
                            </h4>
                            <span className="text-lg font-bold text-orange-500 ml-4">
                              {item.price.toLocaleString()} F
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center gap-2">
                            {item.popular && (
                              <Badge className="bg-red-400 hover:bg-red-700 text-white">
                        Populaire
                      </Badge>
                            )}
                            <AddToCartButton dish={item} className="px-3 py-1 text-xs" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;