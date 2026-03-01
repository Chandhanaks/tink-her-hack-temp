const affirmations = [
  "You are strong, smart, and beautiful!",
  "Every day is a new adventure 💖",
  "Believe in yourself and magic will happen ✨",
  "You are capable of amazing things!",
  "Smile! Today is your day 🌸",
  "Courage is your superpower 💪",
  "Keep shining, the world needs your light 🌟"
];

// Show random affirmation
function showAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const message = affirmations[randomIndex];
  alert(message); 
}

