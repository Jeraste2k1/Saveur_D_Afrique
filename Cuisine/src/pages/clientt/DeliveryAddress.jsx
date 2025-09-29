import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
// Importation du nouveau composant modal
import EditAddressModal from '@/components/clientt/EditAddressModal';

const DeliveryAddress = () => {
  // Définir les adresses comme un état pour pouvoir les modifier
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Maison",
      fullAddress: "Rue de la Joie, Quartier Fidjrossè",
      city: "Cotonou",
      commune: "13ème arrondissement",
      instructions: "Appartement 101, à côté de la pharmacie La Santé",
    },
    {
      id: 2,
      name: "Bureau",
      fullAddress: "Avenue du Commerce, Immeuble Horizon",
      city: "Abomey-Calavi",
      commune: "Godomey",
      instructions: "Bâtiment A, 3ème étage, bureau n°12",
    },
    {
      id: 3,
      name: "Parents",
      fullAddress: "Rue des Cocotiers, Quartier Zoungbodji",
      city: "Porto-Novo",
      commune: "Adjégounlè",
      instructions: "Maison bleue avec portail rouge",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleEditClick = (address) => {
    setSelectedAddress(address);
    setIsModalOpen(true);
  };

  const handleSaveAddress = (updatedAddress) => {
    // Dans une vraie application, vous enverriez ces données à une API
    const updatedAddresses = addresses.map(addr => 
      addr.id === updatedAddress.id ? updatedAddress : addr
    );
    setAddresses(updatedAddresses);
  };
  
  const handleDeleteAddress = (addressId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette adresse ?")) {
      const remainingAddresses = addresses.filter(addr => addr.id !== addressId);
      setAddresses(remainingAddresses);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Mes adresses de livraison</h2>
      <div className="space-y-4">
        {addresses.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p>Aucune adresse de livraison enregistrée.</p>
            <Button className="mt-4">Ajouter une nouvelle adresse</Button>
          </div>
        ) : (
          addresses.map(address => (
            <Card key={address.id} className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  {address.name}
                </CardTitle>
                <div className="space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEditClick(address)}
                  >
                    Modifier
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteAddress(address.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="font-medium">{address.fullAddress}</p>
                <p className="text-sm">Ville : {address.city}</p>
                <p className="text-sm">Commune : {address.commune}</p>
                {address.instructions && (
                  <p className="text-sm italic text-gray-500">
                    Instructions : {address.instructions}
                  </p>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <EditAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        address={selectedAddress}
        onSave={handleSaveAddress}
      />
    </div>
  );
};

export default DeliveryAddress;