export default function Sections() {
  const categories = [
    { name: 'Telibo', count: '10 plats', image: 'telibo.png' },
    { name: 'Akassa', count: '8 plats', image: 'Akassa.jpeg' },
    { name: 'Wassa-Wassa', count: '7 plats', image: 'wassa wassa.jpg' },
    { name: 'Yovo Doko', count: '3 plats', image: 'yovo doko.jpeg' },
    { name: 'Ablo', count: '6 plats', image: 'ablo.jpg' },
    { name: 'Riz au Gras', count: '5 plats', image: 'riz au gras.jpg' },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-orange-500 font-bold mb-2 uppercase">NOS PLATS BÉNINOIS</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12">
          Nos Catégories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-40 h-40 object-cover rounded-full border-2 border-gray-200 mb-4 transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
