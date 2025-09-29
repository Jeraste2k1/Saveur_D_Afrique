import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  Package,
  ArrowLeft,
  Copy,
  Check
} from 'lucide-react';

const trackingSteps = [
  { id: 1, title: "Commande confirmée", description: "Votre commande a été reçue et confirmée", icon: CheckCircle },
  { id: 2, title: "En préparation", description: "Vos articles sont en cours de préparation", icon: Package },
  { id: 3, title: "Expédié", description: "Votre commande est en route", icon: Truck },
  { id: 4, title: "Livré", description: "Votre commande a été livrée", icon: CheckCircle },
];

const OrderTracking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state?.orderData;

  const [copied, setCopied] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (currentStepIndex >= trackingSteps.length - 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentStepIndex(prevIndex => prevIndex + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentStepIndex]);

  if (!orderData) {
    return (
      <div className="text-center p-8">
        <Clock className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h2 className="text-2xl font-bold mb-2">Aucune commande trouvée</h2>
        <p className="text-gray-600 mb-4">Veuillez d'abord passer une commande.</p>
        <Button onClick={() => navigate('/plats')}>Aller à la boutique</Button>
      </div>
    );
  }

  const copyOrderId = () => {
    navigator.clipboard.writeText(orderData.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Button>
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Truck className="w-8 h-8 text-orange-600" />
          Suivi de commande
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Informations principales */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Commande #{orderData.orderId}</CardTitle>
                  <p className="text-gray-600 mt-1">
                    Passée le {new Date().toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyOrderId}
                  className="flex items-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copié!' : 'Copier'}
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Statut de la commande */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Statut de la commande</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {trackingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isCompleted = index <= currentStepIndex;
                  const isActive = index === currentStepIndex;

                  return (
                    <div key={step.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`
                          w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                          ${isCompleted
                            ? 'bg-green-100 text-green-600 border-2 border-green-600'
                            : isActive
                            ? 'bg-orange-100 text-orange-600 border-2 border-orange-600 animate-pulse'
                            : 'bg-gray-100 text-gray-400 border-2 border-gray-300'
                          }
                        `}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div className={`w-0.5 h-16 mt-2 transition-all duration-500 ${
                            isCompleted ? 'bg-green-300' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className={`font-semibold text-lg transition-colors ${
                              isCompleted ? 'text-green-700' : isActive ? 'text-orange-700' : 'text-gray-600'
                            }`}>
                              {step.title}
                            </h3>
                            <p className="text-gray-600 mt-1">{step.description}</p>
                          </div>
                          <span className={`text-sm px-3 py-1 rounded-full ${
                            isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {isCompleted ? 'Terminé' : 'En cours'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar avec détails */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Livraison
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium">Adresse</p>
                <p className="text-sm text-gray-600">{orderData.address}</p>
              </div>
              <div>
                <p className="font-medium">Téléphone</p>
                <p className="text-sm text-gray-600">{orderData.phone}</p>
              </div>
              <div>
                <p className="font-medium">Livraison estimée</p>
                <p className="text-sm text-orange-600 font-semibold">
                  {new Date(orderData.estimatedDelivery).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                  })}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Articles commandés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {orderData.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  {/* Ajout de l'image pour chaque plat */}
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                    </div>
                  </div>
                  {/* Correction : utiliser parseFloat pour le prix */}
                  <span className="font-semibold">{(parseFloat(item.price) * item.quantity).toLocaleString()} FCFA</span>
                </div>
              ))}
              <div className="border-t pt-3 flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                {/* Correction : utiliser parseFloat pour le total */}
                <span className="text-orange-600">{parseFloat(orderData.total).toLocaleString()} FCFA</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Besoin d'aide ?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="tel:+22900000000" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Appeler le support
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="mailto:support@example.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Envoyer un email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;