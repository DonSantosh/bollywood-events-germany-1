import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      
<header className="flex justify-between items-center p-6 shadow-md">
  <motion.div
    className="flex items-center gap-3"
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-full" />
    <h1 className="text-2xl font-bold">Bollywood Events in Germany</h1>
  </motion.div>
  <a
    href="mailto:booking@bollywood-events-germany.com"
    className="text-sm text-purple-700 hover:underline"
  >
    booking@bollywood-events-germany.com
  </a>
    <div className="mt-4">
      <a
        href="https://wa.me/4917643146601"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition mt-2"
      >
        Chat on WhatsApp
      </a>
    </div>
    <div className="mt-4">
      <a
        href="https://wa.me/4917643146601"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </a>
    </div>
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

        
<section className="text-center py-14 bg-gradient-to-r from-purple-100 via-yellow-50 to-purple-100 rounded-lg shadow-xl max-w-4xl mx-auto transition-all duration-500 ease-in-out">
  <h3 className="text-3xl font-semibold text-purple-700 mb-3">Join a Show or Book an Event</h3>
  <p className="text-gray-800 mb-5 px-4">
    Want to attend an upcoming performance? Or planning your own event where Nupur can shine? Reach out to us for bookings or event details — we’d love to hear from you!
  </p>
  <a
    href="mailto:booking@bollywood-events-germany.com"
    className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 transition"
  >
    Contact Us
  </a>
    <div className="mt-4">
      <a
        href="https://wa.me/4917643146601"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition mt-2"
      >
        Chat on WhatsApp
      </a>
    </div>
    <div className="mt-4">
      <a
        href="https://wa.me/4917643146601"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
      >
        Chat on WhatsApp
      </a>
    </div>
</section>

      </main>

      <footer className="text-center text-sm text-gray-500 mt-12 mb-4">
        &copy; {new Date().getFullYear()} Bollywood Events in Germany. All rights reserved.
      </footer>
    </div>
  );
}