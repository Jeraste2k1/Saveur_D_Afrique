import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useOrderHistory } from "@/context/OrderHistoryContext"; // Importez le nouveau hook
import {
  CreditCard,
  Smartphone,
  Banknote,
  ShoppingBag,
} from 'lucide-react';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { addOrder } = useOrderHistory(); // Utilisez la fonction addOrder
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("mobile-money");
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const total = items.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    const orderData = {
      id: `CMD-${Date.now()}`, // Utilisez un ID unique pour l'historique
      restaurant: "Chez Maman Béatrice", // Donnée fictive pour le restaurant, à adapter
      date: new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      total,
      status: 'Livrée', // Le statut de départ peut être "En cours" ou "Livrée"
      items: items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: parseFloat(item.price),
        image: item.image,
      })),
      address: formData.address,
      phone: formData.phone || 'Non spécifié',
    };

    setTimeout(() => {
      setIsProcessing(false);
      addOrder(orderData); // Ajoutez la commande à l'historique
      clearCart();
      navigate("/client/order-tracking", { state: { orderData } });
    }, 2500);
  };

  const renderPaymentForm = () => {
    // ... (le reste de la fonction est inchangé)
    switch (paymentMethod) {
      case 'mobile-money':
        return (
          <div className="space-y-4 mt-4">
            <div>
              <Label htmlFor="phone">Numéro de téléphone</Label>
              <Input
                id="phone"
                placeholder="+229 XX XX XX XX"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>
          </div>
        );
      case 'card':
        return (
          <div className="space-y-4 mt-4">
            <div>
              <Label htmlFor="card">Numéro de carte</Label>
              <Input
                id="card"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Date d'expiration</Label>
                <Input
                  id="expiry"
                  placeholder="MM/AA"
                  value={formData.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                />
              </div>
            </div>
          </div>
        );
      case 'cash':
        return (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Vous paierez en espèces lors de la livraison.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center p-8">
        <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h2 className="text-2xl font-bold mb-2">Votre panier est vide</h2>
        <p className="text-gray-600 mb-4">Ajoutez des produits pour passer une commande.</p>
        <Button className="bg-orange-500" onClick={() => navigate('/plats')}>Commander un plat</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-3">
        <ShoppingBag className="w-8 h-8 text-orange-600" />
        Finaliser votre commande
      </h2>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Résumé de la commande
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                    <div>
                        <span className="font-semibold">{item.name}</span>
                        <p className="text-gray-500 text-sm">Quantité : {item.quantity}</p>
                    </div>
                </div>
                <span className="font-semibold">{(parseFloat(item.price) * item.quantity).toLocaleString()} FCFA</span>
              </div>
            ))}
            <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
              <span>Total</span>
              <span className="text-orange-600">{total.toLocaleString()} FCFA</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Adresse de livraison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Adresse complète de livraison"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Choix du mode de paiement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <RadioGroupItem value="mobile-money" id="r1" />
              <Label htmlFor="r1" className="flex items-center gap-3 cursor-pointer flex-1">
                <Smartphone className="w-6 h-6 text-green-600" />
                <div>
                  <div className="font-medium">Mobile Money</div>
                  <div className="text-sm text-gray-500">MTN Money, Moov Money</div>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <RadioGroupItem value="card" id="r2" />
              <Label htmlFor="r2" className="flex items-center gap-3 cursor-pointer flex-1">
                <CreditCard className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="font-medium">Carte bancaire</div>
                  <div className="text-sm text-gray-500">Visa, Mastercard</div>
                </div>
              </Label>
            </div>
            <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <RadioGroupItem value="cash" id="r3" />
              <Label htmlFor="r3" className="flex items-center gap-3 cursor-pointer flex-1">
                <Banknote className="w-6 h-6 text-gray-600" />
                <div>
                  <div className="font-medium">Espèces à la livraison</div>
                  <div className="text-sm text-gray-500">Paiement à la réception</div>
                </div>
              </Label>
            </div>
          </RadioGroup>
          
          {renderPaymentForm()}
          
          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-orange-600 hover:bg-orange-700 h-12 text-lg font-semibold"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Traitement en cours...
              </div>
            ) : (
              `Confirmer le paiement • ${total.toLocaleString()} FCFA`
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;