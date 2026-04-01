import React from 'react';

const Contacto: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 px-6">
      <h1 className="text-4xl md:text-5xl text-essenda-red mb-8">Contacto</h1>
      <form className="max-w-xl space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">Nombre</label>
          <input type="text" className="w-full p-3 bg-off-white border-2 border-matte-black focus:border-essenda-red outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input type="email" className="w-full p-3 bg-off-white border-2 border-matte-black focus:border-essenda-red outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">Mensaje</label>
          <textarea rows={5} className="w-full p-3 bg-off-white border-2 border-matte-black focus:border-essenda-red outline-none transition-colors"></textarea>
        </div>
        <button className="bg-essenda-red text-off-white px-8 py-3 font-bold hover:bg-garnet-red transition-colors">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
