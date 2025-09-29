import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="py-20 sm:py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-16"
        style={{
          backgroundImage: "url(/hq720-removebg-preview.png)",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
            Commandez vos mets africains préférés en quelques clics
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto md:mx-0">
            Des recettes authentiques, livrées chez vous rapidement
          </p>
          <button className="px-8 py-3 bg-orange-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-orange-500 transition-colors duration-300">
            Commandez Maintenant
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Cercle orange */}
            <motion.div
            animate={{
              scale: [1, 1.1, 1.1, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["50%", "50%", "25%", "25%", "50%"],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.75, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }} className="absolute -inset-4 rounded-full border-[8px] border-orange-500 shadow-2xl"></motion.div>

            {/* Image avec cercle blanc */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-xl">
              <img
                src="/bomiwo.jpg"
                alt="Plat de poulet grillé"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
