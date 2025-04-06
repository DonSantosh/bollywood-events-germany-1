import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold">Bollywood Events in Germany</h1>
        </div>
        <a
          href="mailto:contact@bollywood-events-germany.com"
          className="text-sm text-purple-700 hover:underline"
        >
          contact@bollywood-events-germany.com
        </a>
      </header>

      <main className="p-8">
        <section className="text-center py-12">
          <motion.h2
            className="text-4xl font-extrabold text-purple-800 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Nupur Thakur
          </motion.h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Nupur Thakur is a dynamic performer, choreographer, and cultural ambassador bringing the
            energy of Bollywood to stages across Europe. Known for her expressive dance, powerful voice, and
            magnetic stage presence, Nupur has performed at festivals, corporate events, and private celebrations.
          </p>
        </section>

        <section className="text-center py-10 bg-purple-50 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">Book Nupur for Your Next Event</h3>
          <p className="text-gray-700 mb-4">
            Whether it’s a wedding, cultural night, or corporate event — Nupur Thakur brings the soul of Bollywood to your audience.
          </p>
          <a
            href="https://wa.me/4917643146601"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            WhatsApp Booking
          </a>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 mt-12 mb-4">
        &copy; {new Date().getFullYear()} Bollywood Events in Germany. All rights reserved.
      </footer>
    </div>
  );
}