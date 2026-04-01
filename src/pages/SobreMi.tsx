import React from 'react';

const SobreMi: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6 bg-matte-black text-off-white">
      <h1 className="text-4xl md:text-5xl mb-8">Sobre mí</h1>
      <div className="max-w-3xl flex flex-col md:flex-row gap-12 items-center">
        <div className="w-64 h-64 bg-essenda-red rounded-full flex-shrink-0"></div>
        <div className="space-y-4 text-lg">
          <h2 className="text-3xl text-essenda-red">Rut</h2>
          <p>Guía en el camino de la autogestión consciente.</p>
          <p>Mi enfoque es ecléctico, divertido y profundamente transformador.</p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
