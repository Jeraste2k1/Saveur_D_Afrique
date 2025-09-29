import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Award, Heart, Shield, Truck, Phone } from "lucide-react";
import HeaderLayout from "../layout/HeaderLayout";
import NavBar from "../components/commons/NavBar";
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Users, label: "Clients satisfaits", value: "50,000+", color: "text-orange-600" },
    { icon: Clock, label: "Années d'expérience", value: "8", color: "text-blue-600" },
    { icon: Award, label: "Restaurants partenaires", value: "200+", color: "text-green-600" },
    { icon: Star, label: "Note moyenne", value: "4.8/5", color: "text-yellow-600" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion culinaire",
      description: "Nous célébrons la richesse de la gastronomie béninoise en travaillant avec des chefs passionnés qui perpétuent les traditions ancestrales."
    },
    {
      icon: Shield,
      title: "Qualité garantie",
      description: "Chaque plat est préparé avec des ingrédients frais et locaux, dans le respect des normes d'hygiène les plus strictes."
    },
    {
      icon: Truck,
      title: "Livraison rapide",
      description: "Notre réseau de livreurs dévoués assure une livraison rapide et soignée pour que vos plats arrivent chauds chez vous."
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Nous connectons les familles béninoises avec leurs saveurs préférées, créant des liens authentiques autour de la table."
    }
  ];

  const team = [
    {
      name: "Kofi Mensah",
      role: "Fondateur & CEO",
      description: "Passionné de cuisine béninoise depuis l'enfance, Kofi a créé cette plateforme pour partager l'authenticité de notre gastronomie.",
      avatar: "👨‍💼"
    },
    {
      name: "Adjoa Kponou",
      role: "Cheffe Culinaire",
      description: "Avec 15 ans d'expérience, Adjoa supervise la qualité de tous nos plats et forme nos chefs partenaires.",
      avatar: "👩‍🍳"
    },
    {
      name: "Senou Agbodji",
      role: "Responsable Livraison",
      description: "Senou coordonne notre réseau de livraison pour garantir des délais rapides et un service impeccable.",
      avatar: "👨‍🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <HeaderLayout 
        title="À Propos de Nous"
        subtitle="Découvrez l'histoire passionnante qui nous anime et notre mission de faire rayonner la cuisine béninoise authentique"
        backgroundImage="about.webp"
      />

      {/* Notre Histoire */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre Histoire
              </h2>
              <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En 2016, partant du constat que la cuisine béninoise authentique était difficile à trouver en livraison, nous avons décidé de créer une plateforme dédiée à notre riche patrimoine culinaire.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aujourd'hui, nous sommes fiers de connecter plus de 50,000 familles avec leurs plats traditionnels préférés, tout en soutenant les restaurants locaux et les chefs qui préservent nos traditions culinaires.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Notre mission va au-delà de la simple livraison : nous voulons célébrer, préserver et transmettre la richesse de la gastronomie béninoise aux générations futures.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="story.jpg"
                  alt="Femme africaine préparant la cuisine traditionnelle"
                  className="rounded-2xl shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-orange-200 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Chiffres
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des résultats qui témoignent de notre engagement envers l'excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-lg bg-card-none">
                <CardContent className="p-6">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chaque décision et chaque action de notre équipe
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none">
                <CardHeader className="text-center">
                  <value.icon className="w-16 h-16 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl text-foreground">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notre Équipe
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rencontrez les personnes passionnées qui rendent tout cela possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-none overflow-hidden">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <Badge className="bg-orange-600 text-white mb-2">
                    {member.role}
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-foreground">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Notre Aventure Culinaire
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Découvrez les saveurs authentiques du Bénin et soutenez notre communauté de chefs passionnés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plats">
            <Button size="lg" className="bg-orange-500 text-white hover:text-orange-500 hover:bg-white">
              Explorer nos plats
            </Button>
            </Link>
            <Link to="/contact">
            <Button size="lg" variant="outline" className=" border-white text-orange-600 hover:bg-white/10 hover:white">
              <Phone className="w-5 h-5 mr-2" />
              Nous contacter
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;