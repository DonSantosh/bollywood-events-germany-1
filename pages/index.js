import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-yellow-100 text-white p-8">
      <motion.img 
        src="/logo.png" 
        alt="Bollywood Events in Germany Logo"
        className="w-40 mb-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <h1 className="text-4xl font-bold text-center text-yellow-300 drop-shadow-md">
        Bollywood Events in Germany
      </h1>
      <p className="mt-4 text-lg text-center max-w-xl text-yellow-100">
        Creating magical Bollywood-style moments in Deutschland – from weddings and birthdays to corporate galas and cultural celebrations.
      </p>
    </div>
  );
}