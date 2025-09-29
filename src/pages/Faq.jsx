import { useState } from "react";

// Mock des composants Card, CardContent et Button pour rendre le code autonome
const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-orange-600 text-white shadow hover:bg-orange-700",
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
  };
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Icônes SVG en ligne pour un code autonome
const HelpCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
);

const Truck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M18 6h-1c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h1"/><path d="M12 18H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10l-1.5 5L17 10l-1.5 5L17 10l-1.5 5L17 10z"/><circle cx="12" cy="18" r="2"/><circle cx="5" cy="18" r="2"/></svg>
);

const DollarSign = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
);

const Utensils = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h3v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8h3c1.1 0 2-.9 2-2V2H3z"/></svg>
);

const ChevronDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
);

const ChevronUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
);

const Search = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

function Faq() {
  // Gère l'état de la barre de recherche
  const [searchTerm, setSearchTerm] = useState("");
  // Gère la catégorie active dans le menu de gauche
  const [activeCategory, setActiveCategory] = useState("general");
  // Gère l'état d'ouverture/fermeture de chaque question
  const [openItems, setOpenItems] = useState({});

  // Définition des catégories et de leurs icônes pour le concept de commande de plats
  const categories = [
    { id: "general", name: "Général", icon: <HelpCircle className="h-5 w-5" /> },
    { id: "orders", name: "Commandes & Livraison", icon: <Truck className="h-5 w-5" /> },
    { id: "payment", name: "Paiements & Sécurité", icon: <DollarSign className="h-5 w-5" /> },
    { id: "restaurants", name: "Partenaires restaurants", icon: <Utensils className="h-5 w-5" /> }
  ];

  // Données de la FAQ adaptées au concept de la plateforme "AfriPlat"
  const faqData = {
    general: [
      {
        question: "Comment fonctionne AfriPlat ?",
        answer: "AfriPlat est une plateforme qui vous permet de commander vos plats africains préférés en ligne. Vous parcourez les menus des restaurants partenaires, ajoutez des plats à votre panier, payez en toute sécurité et un livreur vous apporte votre commande directement chez vous."
      },
      {
        question: "Dans quelles villes êtes-vous disponibles ?",
        answer: "Nous sommes actuellement disponibles dans les principales villes de la région. Pour vérifier si nous livrons dans votre zone, saisissez votre adresse dans la barre de recherche sur la page d'accueil."
      },
      {
        question: "Puis-je commander pour plus tard ?",
        answer: "Oui, la plupart de nos restaurants partenaires vous permettent de programmer une commande à l'avance. Il vous suffit de choisir la date et l'heure de livraison souhaitées au moment de passer votre commande."
      },
      {
        question: "Comment puis-je créer un compte ?",
        answer: "Cliquez simplement sur 'S'inscrire' ou 'Créer un compte' sur la page d'accueil. Vous pouvez vous inscrire avec votre adresse email, votre numéro de téléphone ou via vos comptes de réseaux sociaux pour un accès rapide."
      }
    ],
    orders: [
      {
        question: "Combien coûte la livraison ?",
        answer: "Les frais de livraison dépendent de votre localisation et du restaurant. Le coût exact est clairement affiché dans votre panier avant la validation de la commande."
      },
      {
        question: "Comment suivre ma commande ?",
        answer: "Une fois votre commande confirmée, vous recevrez une notification et un lien pour la suivre en temps réel, de la préparation du plat à l'arrivée du livreur chez vous."
      },
      {
        question: "Que faire en cas de problème avec ma commande ?",
        answer: "Si votre commande est incorrecte ou endommagée, veuillez nous contacter immédiatement via le chat d'assistance dans l'application. Notre équipe support s'engage à résoudre le problème le plus rapidement possible."
      },
      {
        question: "Puis-je annuler ou modifier ma commande ?",
        answer: "Vous pouvez annuler votre commande sans frais si le restaurant n'a pas encore commencé à la préparer. Les modifications ne sont pas possibles une fois la commande passée. Il faut l'annuler et en passer une nouvelle."
      }
    ],
    payment: [
      {
        question: "Quels sont les modes de paiement acceptés ?",
        answer: "Nous acceptons les paiements par carte de crédit/débit, ainsi que les paiements mobiles populaires dans la région, tels que MTN MoMo, Orange Money, et Wave. Le paiement en espèces à la livraison est également une option chez certains restaurants."
      },
      {
        question: "Le paiement en ligne est-il sécurisé ?",
        answer: "Oui, nous utilisons des technologies de chiffrement de pointe pour garantir que toutes vos transactions sont sécurisées. Vos informations de paiement sont protégées et ne sont jamais partagées."
      },
      {
        question: "Que faire si mon paiement échoue ?",
        answer: "Si votre paiement échoue, vérifiez les informations de votre carte ou votre solde. Si le problème persiste, essayez un autre mode de paiement ou contactez notre support pour obtenir de l'aide."
      },
      {
        question: "Est-ce que le pourboire est inclus ?",
        answer: "Le pourboire n'est pas inclus dans le total de la commande. Vous avez la possibilité de laisser un pourboire au livreur via l'application après la livraison si vous le souhaitez."
      }
    ],
    restaurants: [
      {
        question: "Comment puis-je devenir un restaurant partenaire ?",
        answer: "Nous serions ravis de collaborer avec vous ! Rendez-vous sur notre page 'Devenir Partenaire' pour remplir le formulaire de demande. Notre équipe vous contactera pour finaliser l'inscription."
      },
      {
        question: "Les restaurants sont-ils notés par les utilisateurs ?",
        answer: "Oui, après chaque commande, vous avez la possibilité de noter le restaurant et de laisser un avis. Cela permet de maintenir la qualité des services et d'aider les autres utilisateurs dans leur choix."
      },
      {
        question: "Comment les restaurants gèrent-ils les commandes ?",
        answer: "Chaque restaurant partenaire reçoit un terminal ou une application dédiée pour gérer les commandes en temps réel, les accepter, les mettre à jour et les signaler comme prêtes pour le livreur."
      },
      {
        question: "Puis-je commander plusieurs plats de restaurants différents ?",
        answer: "Non, pour des raisons logistiques, une commande doit être passée auprès d'un seul restaurant à la fois. Si vous souhaitez commander ailleurs, vous devrez passer une nouvelle commande."
      }
    ]
  };

  // Fonction pour basculer l'état d'ouverture/fermeture d'un élément
  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Filtrage des questions en fonction du terme de recherche et de la catégorie active
  const filteredFAQ = (faqData[activeCategory] || []).filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      {/* Section Héro */}
      <section className="bg-[#fdf8f4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
            Foire Aux Questions
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto mb-8">
            Trouvez toutes les réponses pour passer votre première commande sur notre plateforme.
          </p>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto relative">
            
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full text-lg border-2 focus:ring-4 focus:ring-orange-300 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Contenu de la FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar des catégories */}
            <div className="lg:col-span-1">
              <Card className="lg:sticky lg:top-8">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Catégories</h3>
                  <nav className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setSearchTerm(""); // Réinitialiser la recherche
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                          activeCategory === category.id
                            ? 'bg-orange-600 text-white'
                            : 'text-slate-700 hover:bg-orange-100'
                        }`}
                      >
                        {category.icon}
                        <span className="font-medium">{category.name}</span>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Questions de la FAQ */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                {filteredFAQ.length === 0 ? (
                  <Card className="p-8 text-center">
                    <div className="text-slate-400 mb-4">
                      <Search className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Aucun résultat trouvé</h3>
                    <p className="text-slate-600">Essayez avec d'autres mots-clés ou parcourez les catégories.</p>
                  </Card>
                ) : (
                  filteredFAQ.map((item, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-slate-900 pr-4">{item.question}</h3>
                        {openItems[index] ? (
                          <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0" />
                        )}
                      </button>

                      {openItems[index] && (
                        <div className="transition-all duration-300 ease-in-out">
                          <CardContent className="px-6 pb-6 pt-0">
                            <div className="border-t border-slate-200 pt-4">
                              <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                            </div>
                          </CardContent>
                        </div>
                      )}
                    </Card>
                  ))
                )}
              </div>

              {/* Carte de contact du support */}
              <Card className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 border-amber-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Vous ne trouvez pas votre réponse ?</h3>
                  <p className="text-slate-600 mb-6">
                    Notre équipe est là pour vous aider à toute heure de la journée, tous les jours de la semaine.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    
                    <a href="/contact" className="no-underline">
                        <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-50 w-full rounded-4xl sm:w-auto p-3">
                           Nous contacter
                        </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
