import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { User, MapPin, Lock } from 'lucide-react';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState("infos");

  const [user, setUser] = useState({
    nom: "Doe",
    prenom: "John",
    email: "john.doe@example.com",
    phone: "+229 98 76 54 32",
    birthDate: "1995-08-15",
    adresse: "Rue 123, Quartier X",
    ville: "Cotonou",
    commune: "12ème arrondissement",
    instructions: "Appeler avant livraison",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Logic to send data to your backend
    console.log("Profile updated:", user);
  };

  // Revert to non-edit mode when switching tabs
  useEffect(() => {
    setEditMode(false);
  }, [activeTab]);

  return (
    <div>
 <Tabs defaultValue="infos" className="w-full" onValueChange={setActiveTab}>
    {/* TabsList avec icônes sur mobile */}
    <TabsList className="grid w-full grid-cols-3 p-1 rounded-xl bg-gray-200 mb-6 h-auto">
      <TabsTrigger 
        value="infos" 
        className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 rounded-lg px-2 py-3 text-xs sm:text-sm md:text-base text-center leading-tight flex flex-col sm:flex-row items-center gap-1 sm:gap-2"
      >
        <User className="w-4 h-4 sm:hidden" />
        <span className="hidden sm:inline">Informations Personnelles</span>
        <span className="sm:hidden text-xs">Infos</span>
      </TabsTrigger>
      <TabsTrigger 
        value="adresse"
        className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 rounded-lg px-2 py-3 text-xs sm:text-sm md:text-base text-center leading-tight flex flex-col sm:flex-row items-center gap-1 sm:gap-2"
      >
        <MapPin className="w-4 h-4 sm:hidden" />
        <span>Adresse</span>
      </TabsTrigger>
      <TabsTrigger 
        value="password"
        className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 rounded-lg px-2 py-3 text-xs sm:text-sm md:text-base text-center leading-tight flex flex-col sm:flex-row items-center gap-1 sm:gap-2"
      >
        <Lock className="w-4 h-4 sm:hidden" />
        <span className="text-xs sm:text-sm">Mot de Passe</span>
      </TabsTrigger>
    </TabsList>

        {/* Contenu de l'onglet Infos Personnelles */}
        <TabsContent value="infos">
          <Card>
            <CardHeader>
              <CardTitle>Informations Personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["nom", "prenom", "email", "phone", "birthDate"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field} className="capitalize">
                      {field === "birthDate" ? "Date de naissance" : field}
                    </Label>
                    <Input
                      id={field}
                      type={field === "birthDate" ? "date" : "text"}
                      name={field}
                      value={user[field]}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="bg-gray-50 disabled:bg-gray-100 disabled:opacity-100 disabled:cursor-not-allowed"
                    />
                  </div>
                ))}
              </div>
              
              {editMode ? (
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700">Sauvegarder</Button>
                  <Button variant="outline" onClick={() => setEditMode(false)} className="border-gray-300 text-gray-700 hover:bg-gray-100">
                    Annuler
                  </Button>
                </div>
              ) : (
                <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700" onClick={() => setEditMode(true)}>
                  Modifier les informations
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contenu de l'onglet Adresse */}
        <TabsContent value="adresse">
          <Card>
            <CardHeader>
              <CardTitle>Adresse de livraison</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["adresse", "ville", "commune", "instructions"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label htmlFor={field} className="capitalize">
                      {field === "instructions" ? "Instructions spéciales" : field}
                    </Label>
                    <Input
                      id={field}
                      type="text"
                      name={field}
                      value={user[field]}
                      onChange={handleChange}
                      disabled={!editMode}
                      className="bg-gray-50 disabled:bg-gray-100 disabled:opacity-100 disabled:cursor-not-allowed"
                    />
                  </div>
                ))}
              </div>
              
              {editMode ? (
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700">Sauvegarder</Button>
                  <Button variant="outline" onClick={() => setEditMode(false)} className="border-gray-300 text-gray-700 hover:bg-gray-100">
                    Annuler
                  </Button>
                </div>
              ) : (
                <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700" onClick={() => setEditMode(true)}>
                  Modifier l'adresse
                </Button>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contenu de l'onglet Mot de Passe */}
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Modifier le mot de passe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="old-password">Ancien mot de passe</Label>
                <Input id="old-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nouveau mot de passe</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">Mettre à jour le mot de passe</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;