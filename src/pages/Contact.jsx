import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
// Vous devrez importer toast depuis votre librairie de notification
// Par exemple: import { toast } from 'react-hot-toast'; ou 'sonner'
// Si vous n'avez pas de librairie de toast, vous pouvez commenter cette ligne
// et la fonction toast dans handleSubmit
// import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour envoyer les données du formulaire (API, etc.)
    console.log("Données du formulaire :", formData);
    
    // Si vous utilisez une librairie de toast, décommentez la ligne ci-dessous
    // toast({
    //   title: "Message envoyé ✅",
    //   description: "Nous vous répondrons dans les plus brefs délais.",
    // });
    
    // Réinitialise le formulaire après l'envoi
    setFormData({ firstname: "", lastname: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#fdf8f4]">
     
      {/* Section Hero */}
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-4xl font-extrabold text-[#2c2c2c] mb-4">Contactez-nous</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Pour toute question, demande d'information ou collaboration, n'hésitez pas à nous écrire. Nous serons ravis de vous lire et de vous répondre dans les plus brefs délais.
        </p>
      </div>

      {/* Formulaire + Image */}
      <section className="container mx-auto px-4 pb-16">
        <Card className="rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            {/* Formulaire */}
            <CardContent className="p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname">Prénom</Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      placeholder="Ex. Jean"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Nom</Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      placeholder="Ex. Dupont"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Adresse email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="exemple@email.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Comment pouvons-nous vous aider ?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Commentaires / Questions</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                  />
                </div>

                <Button type="submit" className="bg-orange-600 hover:bg-orange-700 w-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>

            {/* Image */}
            <div className="bg-gray-100 flex items-center justify-center p-6">
              <img
                src="contact.avif"
                alt="Un client profitant de sa commande"
                className="rounded-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Infos de contact */}
      <section className="py-12 bg-[#fff6ef]">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Phone className="mx-auto w-8 h-8 text-orange-600 mb-2" />
            <h3 className="font-semibold text-lg">Appelez-nous</h3>
            <p className="text-gray-600 text-sm">(+33) 1 23 45 67 89</p>
          </div>
          <div>
            <Mail className="mx-auto w-8 h-8 text-orange-600 mb-2" />
            <h3 className="font-semibold text-lg">Envoyez-nous un email</h3>
            <p className="text-gray-600 text-sm">support@bigburger.com</p>
          </div>
          <div>
            <MapPin className="mx-auto w-8 h-8 text-orange-600 mb-2" />
            <h3 className="font-semibold text-lg">Nos Bureaux</h3>
            <p className="text-gray-600 text-sm">123 Rue de la Gourmandise, 75001 Paris, France</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;