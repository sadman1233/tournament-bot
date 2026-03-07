const TelegramBot = require('node-telegram-bot-api');

// আপনার বটের টোকেন [cite: 2026-01-15]
const token = '8628945913:AAGvlqMBlhdhMKz3dUwgds9eoaBWTcDL9MU';
const bot = new TelegramBot(token, {polling: true});

console.log("টুর্নামেন্ট বট এখন মেম্বারদের জন্য প্রস্তুত... 🔥");

// কেউ গ্রুপে জয়েন করলেই এই ফাংশনটি কাজ করবে
bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    const newUser = msg.new_chat_members[0].first_name; 

    const welcomeMessage = `👋 স্বাগতম ${newUser}! 

আমাদের টুর্নামেন্ট গ্রুপে জয়েন করার জন্য ধন্যবাদ। 🏆
গ্রুপে মেসেজ দেওয়া বন্ধ থাকলেও আপনার জন্য এই স্বাগতম মেসেজটি অটোমেটিক পাঠানো হয়েছে।

📜 নিয়মাবলী জানতে আমাদের সাথেই থাকুন!`;

    bot.sendMessage(chatId, welcomeMessage);
});

// কোনো এরর হলে সেটি কনসোলে দেখাবে
bot.on("polling_error", (err) => console.log(err.code));