import React from 'react';

const HeaderLayout = ({ 
  title, 
  subtitle, 
  backgroundImage = "url(/hq720-removebg-preview.png)"
}) => {
  return (
    <div 
      className="pt-20 pb-12  text-orange-500 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4  lg:py-24 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeaderLayout;