# 🎯 Wordle Game

![Wordle Screenshot](https://res.cloudinary.com/dtxr7lmdn/image/upload/v1755172190/worldeimg_flckm2.png)

A **modern, interactive Wordle clone** built with **React**, featuring dark/light mode, smooth animations, and an intuitive guessing interface. Challenge yourself to guess the hidden 5-letter word before your attempts run out!  

---


## 🚀 Live Demo

Check out the live version here: [Wordle on Render](https://wordle121.onrender.com/)

---


## 📦 Features

- 🔥 **Interactive Guessing:** Input 5-letter words and receive real-time feedback.  
- 🎉 **Animations:** Celebrate wins with confetti and smooth overlay effects.  
- 🌙 **Dark & Light Mode:** Toggle between themes easily.  
- ✅ **Word Validation:** Only valid words from the allowed set are accepted.  
- 📊 **Visual Feedback:** Shows common letters and remaining tries dynamically.  
- ♻️ **Restart Game:** Generates a new word each time you restart.  

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Animations:** Framer Motion, canvas-confetti  
- **State Management:** React Hooks (`useState`, `useEffect`)  

---

## 🎮 How to Play

1. Type a **5-letter word** in the input box.  
2. Press **Enter** to submit your guess.  
3. The game will highlight **common letters** with the solution.  
4. You have **6 tries** to guess the correct word.  
5. Celebrate 🎉 if you win, or try again if you lose 😢.  
6. Press **Restart** to shuffle a new word and start over.  

---

## 📂 Project Structure

wordle/
│
├─ public/
│  ├─ guesses.txt      # Allowed guesses
│  ├─ wordle.txt       # Solution words
│
├─ src/
│  ├─ components/
│  │  ├─ Guess.jsx
│  │  ├─ Checker.jsx
│  │  ├─ InstructionsModal.jsx
│  │  ├─ SetLogic.jsx
│  │
│  ├─ App.jsx
│  ├─ Main.jsx
│  ├─ index.js
│
├─ package.json
├─ tailwind.config.js
└─ README.md


---

## ⚡ Getting Started

1. **Clone the repository**  
```bash
git clone https://github.com/Stack-Sage/wordle.git
cd wordle
Install dependencies

npm install
Start the development server


npm run dev
Open http://localhost:5173 to view in browser.

💻 Usage
Use the input field to type guesses.

Press Enter to submit.

Check feedback below the input for validity, common letters, and tries left.

Restart to play with a new word.

📌 Important Links
GitHub: https://github.com/Stack-Sage

LinkedIn: https://www.linkedin.com/in/adarsh-pathania177/

Live Demo: https://adarsh-v1.onrender.com

🤝 Contributing
This project is my original work. Feel free to fork, explore, and improve it for learning purposes!

🌟 License
This project is original work by Adarsh Pathania and not licensed for redistribution.

🎨 Screenshots


Enjoy guessing! 🎯