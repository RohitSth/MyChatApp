// Array of emoji characters
const emojis = [
  "😎",
  "😉",
  "😏",
  "🕶️",
  "🌟",
  "✨",
  "🔥",
  "🎯",
  "🌙",
  "💫",
  "⚡️",
  "🎉",
  "🌀",
  "💥",
  "🎵",
  "💎",
  "🌊",
  "🚀",
  "🌌",
  "🌈",
  "🔮",
  "🧿",
  "🎇",
  "💣",
  "🕹️",
  "👾",
  "🖤",
  "⚔️",
];

export const getRandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};
