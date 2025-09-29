import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Trash2, ShoppingCart } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleApplyPromo = () => {
    // Note: Dans une application réelle, vous feriez une requête à une API pour vérifier le code promo.
    if (promo.toLowerCase() === "food10") {
      setDiscount(0.1); // 10% de réduction
      alert("Code promo appliqué avec succès !");
    } else {
      setDiscount(0);
      alert("Code promo invalide !");
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-6" />
        <h2 className="text-2xl font-semibold text-gray-600">Votre panier est vide.</h2>
        <p className="text-gray-500 mt-2">Commencez par ajouter des plats délicieux !</p>
        <Link to="/nos-restaurants">
          <Button className="mt-6">Découvrir les restaurants</Button>
        </Link>
      </div>
    );
  }

  const subTotal = getTotalPrice();
  const deliveryFee = 2000;
  const discountAmount = subTotal * discount;
  const total = subTotal - discountAmount + deliveryFee;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Mon Panier <span className="text-lg font-medium text-gray-500">({items.length} articles)</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Liste des articles */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <Card key={item.id}>
              <CardContent className="p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                />
                
                <div className="flex-1 space-y-1">
                  <h4 className="font-bold text-lg text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">{item.price.toLocaleString()} F CFA</span>
                  </p>
                </div>
                
                {/* Contrôles quantité et suppression */}
                <div className="flex flex-col items-center justify-between h-24">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-medium text-lg w-6 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-8 h-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="text-center mt-2">
                    <p className="font-bold text-orange-600 text-lg">
                      {(item.price * item.quantity).toLocaleString()} F CFA
                    </p>
                    <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-600">
                      <Trash2 className="w-4 h-4 mr-1" />
                      Retirer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Récapitulatif et paiement */}
        <Card className="lg:col-span-1 h-fit shadow-lg">
          <CardHeader>
            <CardTitle>Récapitulatif de la commande</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Code promo */}
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Code promo"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleApplyPromo} className="bg-orange-500 hover:bg-orange-600">
                Appliquer
              </Button>
            </div>

            {/* Détails des coûts */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total :</span>
                <span className="font-semibold">{subTotal.toLocaleString()} F CFA</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600 font-medium">
                  <span>Réduction ({discount * 100}%) :</span>
                  <span>-{discountAmount.toLocaleString()} F CFA</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-600">Frais de livraison :</span>
                <span className="font-semibold">{deliveryFee.toLocaleString()} F CFA</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                <span>Total :</span>
                <span className="text-orange-600">{total.toLocaleString()} F CFA</span>
              </div>
            </div>

            {/* Bouton validation */}
            <Link to="/client/checkout">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 font-bold py-6 text-base">
                Passer la commande
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;