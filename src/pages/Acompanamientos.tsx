import React from 'react';

const Acompanamientos: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6">
      <h1 className="text-4xl md:text-5xl text-essenda-red mb-8">Acompañamientos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="p-8 border-2 border-essenda-red rounded-lg">
          <h2 className="text-2xl mb-4">Sesiones Individuales</h2>
          <p>Un viaje personalizado a través del movimiento y la respiración.</p>
        </div>
        <div className="p-8 border-2 border-garnet-red rounded-lg">
          <h2 className="text-2xl mb-4">Talleres Grupales</h2>
          <p>Frecuencias y energía compartida en comunidad.</p>
        </div>
      </div>
    </div>
  );
};

export default Acompanamientos;
