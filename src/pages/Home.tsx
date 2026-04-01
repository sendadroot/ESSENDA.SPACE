import React from 'react';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-off-white px-6">
      {/* Decorative elements for eclectic feel */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-essenda-red/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-acid-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4">
          <span className="text-matte-black">ES</span>
          <span className="text-essenda-red">SEN</span>
          <span className="text-matte-black">DA</span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl font-medium max-w-2xl mx-auto text-matte-black/80 mb-12"
        >
          Autogestión consciente a través del <span className="text-essenda-red">movimiento</span>, la <span className="text-essenda-red">respiración</span> y las <span className="text-essenda-red">frecuencias</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a 
            href="/que-es-essenda" 
            className="inline-block bg-matte-black text-off-white px-10 py-4 text-lg font-bold hover:bg-essenda-red transition-all transform hover:scale-105 hover:-rotate-1"
          >
            DESCUBRE EL MÉTODO
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-10 text-xs font-mono text-matte-black/30 hidden md:block">
        REBELDE • CÁLIDO • DIVERTIDO • ECLECTICO
      </div>
    </div>
  );
};

export default Home;
