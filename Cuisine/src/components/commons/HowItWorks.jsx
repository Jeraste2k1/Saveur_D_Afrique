import { motion } from "framer-motion";

const Card = ({ title, description, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg text-left w-full max-w-sm"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed min-h-[4.5rem]">{description}</p>
  </motion.div>
);

function HowItWorks () {
  return (
    <div className="bg-gray-100 p-6 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">
        Comment ça marche ?
      </h1>
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full px-4">
        <Card
          title="Passez votre commande"
          description="Sélectionnez vos plats préférés parmi notre large gamme de spécialités culinaires, puis validez votre panier en quelques clics seulement."
          icon="📋"
        />
        <Card
          title="Paiement sécurisé"
          description="Profitez d'un système de paiement entièrement sécurisé avec plusieurs options disponibles. Votre transaction est protégée et traitée instantanément pour votre tranquillité d'esprit."
          icon="💰"
        />
        <Card
          title="Recevez votre commande"
          description="Suivez en temps réel la préparation de vos plats préférés grâce à notre système de tracking. Recevez votre commande  directement chez vous."
          icon="📦"
        />
      </div>
    </div>
  );
};

export default HowItWorks;