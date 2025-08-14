import React from "react";
import SetLogic from "./SetLogic";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  useLenis((lenis) => {
    console.log(lenis); // Called every scroll
  });

  return (
    <HelmetProvider>
      <ReactLenis root options={{ smoothWheel: true, duration: 1.2 }} />

      {/* SEO & Social Meta Tags */}
      <Helmet>
        <title>Play Daily Word Puzzle Game Online | Wordle121</title>
        <meta
          name="description"
          content="Play Wordle121, a free daily word puzzle game online. Guess the hidden word, boost your vocabulary, and challenge friends! Works on all devices."
        />
        <link rel="canonical" href="https://wordle121.onrender.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Play Wordle121 – Daily Word Puzzle Game Online" />
        <meta property="og:description" content="Enjoy our free Wordle-style daily puzzle. Guess the hidden word and challenge friends worldwide!" />
        <meta property="og:image" content="https://images.pexels.com/photos/278890/pexels-photo-278890.jpeg" />
        <meta property="og:url" content="https://wordle121.onrender.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wordle121 – Free Daily Word Puzzle Game" />
        <meta name="twitter:description" content="Guess the hidden word, boost your vocabulary, and play daily challenges for free!" />
        <meta name="twitter:image" content="https://images.pexels.com/photos/278890/pexels-photo-278890.jpeg" />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Game",
            name: "Wordle121",
            url: "https://wordle121.onrender.com/",
            description: "Play Wordle121, a free daily word puzzle game online. Guess the hidden word and challenge friends.",
            image: "https://images.pexels.com/photos/278890/pexels-photo-278890.jpeg"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen flex flex-col items-center justify-start text-center bg-transparent text-gray-900 transition-colors duration-300">
        <motion.h1
          initial={{ opacity: 0, x: -10, y:-10 }}
          animate={{ opacity: 1, x: 0, y:0}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl lg:text-4xl md:text-3xl pt-4 font-extrabold mb-6 z-20 bg-gradient-to-r from-neutral-600 via-slate-600 to-stone-600 bg-clip-text text-transparent drop-shadow-lg"
        >
          🎯 Wordle – Play the Ultimate Word Puzzle Online
        </motion.h1>
        <SetLogic />
      </main>
    </HelmetProvider>
  );
};

export default App;
