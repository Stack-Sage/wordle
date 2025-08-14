// InstructionsSection.jsx
import React from "react";

export default function InstructionsSection({ darkMode }) {
  const FEATURED = [
    {
      name: "GitHub",
      url: "https://github.com/Stack-Sage",
      desc: "Explore my open-source projects, experiments, and code. Repo collection for all the apps you see here.",
      emoji: "💻",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adarsh-pathania177/",
      desc: "Connect professionally — see my experience, projects, and collaborations.",
      emoji: "🎯",
    },
    {
      name: "Portfolio",
      url: "https://adarsh-v1.onrender.com",
      desc: "My personal portfolio: curated highlights, project demos and contact info.",
      emoji: "🌐",
    },
  ];

  const PROJECTS = [
    {
      name: "Planet Simulation",
      url: "https://planet-stimulation343.onrender.com/",
      desc:
        "An interactive physics simulation: two Newtonian bodies attract, collide, and spawn a dynamic universe — score-based and visually rich.",
      emoji: "🪐",
    },
    {
      name: "Stack Project",
      url: "https://project-stack345.onrender.com/",
      desc:
        "A curated collection of my projects and mini-games — handy if you want to browse everything in one place.",
      emoji: "🧩",
    },
    {
      name: "AniHive",
      url: "https://anihive-11.onrender.com",
      desc:
        "Animatic meditations inspired by anime — short animated loops and relaxing visuals for focused sessions.",
      emoji: "✨",
    },
    {
      name: "TinyPiano",
      url: "https://tinypiano-2-12.onrender.com/",
      desc:
        "A tiny, browser-based piano — play melodies directly without downloads or installs.",
      emoji: "🎹",
    },
    {
      name: "Keet v20",
      url: "https://keet-20.onrender.com",
      desc:
        "Search and download copyright-free images quickly — simple UI for creators and prototypes.",
      emoji: "📸",
    },
  ];

  return (
    <section
      className={`w-full  max-w-4xl mx-auto px-4 py-10 transition-colors duration-300 ${
        darkMode ? "bg-transparent text-gray-100" : "bg-transparent text-gray-900"
      }`}
      aria-labelledby="how-to-play-title"
    >
      {/* --- Heading --- */}
      <header className="mb-6 text-center">
        <h1
          id="how-to-play-title"
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          How to Play — Wordle Game Online
        </h1>
        <p
          className={`mt-3 max-w-2xl mx-auto text-sm md:text-base ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Guess the hidden <strong>five-letter</strong> word within{" "}
          <strong>six tries</strong>. After each guess, tiles will show hints —
          read the rules below (this version uses a custom color rule).
        </p>
      </header>

      {/* --- Instructions card --- */}
      <div
        className={`rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md border ${
          darkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-neutral-200 border-gray-200"
        }`}
      >
        <div className="space-y-4">
          <p
            className={`leading-relaxed text-base md:text-lg ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Welcome to <strong>Wordle Game Online</strong> — a compact,
            addictive word puzzle that helps improve vocabulary and logic. Type
            a 5-letter word and press Enter. The UI will highlight letters to
            guide your next guesses.
          </p>

          {/* Important note about custom mapping */}
          <div
            className={`rounded-lg p-4 border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-neutral-300 border-gray-200"
            }`}
          >
            <p
              className={`font-semibold mb-3 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Important (custom rules used here)
            </p>

            <ul
              className={`space-y-3 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li className="flex items-start gap-4">
                <span className="min-w-[72px] px-3 py-1 rounded-md bg-green-500 text-black font-semibold text-sm flex items-center justify-center">
                   Green
                </span>
                <div>
                  <strong>Green</strong> means the{" "}
                  <em>letter is included</em> in the hidden word (it may or may
                  not be in the exact position).
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="min-w-[72px] px-3 py-1 rounded-md bg-yellow-500 text-black font-semibold text-sm flex items-center justify-center">
                   Yellow
                </span>
                <div>
                  <strong>Yellow</strong> means the{" "}
                  <em>letter is NOT</em> in the hidden word at all.
                </div>
              </li>

              
            </ul>
          </div>

          {/* Tips */}
          <div className="pt-2">
            <h3
              className={`text-sm md:text-base font-semibold mb-2 ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Quick tips
            </h3>
            <ul
              className={`list-disc list-inside space-y-1 text-sm md:text-base ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <li>
                Start with common vowels and consonants (A, E, R, T, O) to
                reveal included letters.
              </li>
              <li>
                Keep green letters and try them in different positions if
                needed.
              </li>
              <li>
                Use yellow-marked letters to rule out characters — they won’t
                appear in the answer.
              </li>
              <li>
                Play daily to build streaks and improve pattern recognition.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- Featured personal links --- */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {FEATURED.map((l) => (
          <a
            key={l.name}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-4 p-4 rounded-xl border shadow-sm hover:shadow-md transition transform hover:-translate-y-1 ${
              darkMode
                ? "bg-gray-900 border-gray-700 text-gray-200"
                : "bg-neutral-200 border-gray-200 text-gray-900"
            }`}
          >
            <div className="text-2xl">{l.emoji}</div>
            <div>
              <div className="font-semibold">{l.name}</div>
              <div
                className={`text-sm mt-1 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {l.desc}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* --- Projects --- */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4 text-center">Check Out My Other Work Too</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-5 rounded-xl border shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 ${
                darkMode
                  ? "bg-gray-900 border-gray-700 text-gray-200"
                  : "bg-neutral-200 border-gray-200 text-gray-900"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{p.emoji}</div>
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <p
                    className={`text-sm mt-1 leading-relaxed ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://adarsh-v1.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium underline hover:no-underline"
          >
            See all projects & demos on my portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
