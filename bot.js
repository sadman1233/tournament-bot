const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

// ১. Render-এর পোর্ট এরর সমাধান (Port Binding) [cite: 2026-03-07]
http.createServer((req, res) => {
  res.write('Bot is running!');
  res.end();
}).listen(process.env.PORT || 3000);

// ২. আপনার নতুন টোকেন (নিচে আপনার দেওয়া নতুন টোকেনটি বসানো হয়েছে) [cite: 2026-03-07]
const token = '8628945913:AAHaYX_ZAHXhyj8JcrNjADBkKtIqzX6FowA';
const bot = new TelegramBot(token, {polling: true});

console.log("RDX E-Sports বট এখন মেম্বারদের জন্য প্রস্তুত... 🔥");

// ৩. নতুন মেম্বার জয়েন করলে কাস্টম মেসেজ [cite: 2026-03-07]
bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    const newUser = msg.new_chat_members[0].first_name; 

    const welcomeMessage = `╔════════════════════╗
      🏆 WELCOME 🏆
╚════════════════════╝

👋 স্বাগতম ${newUser}!

🎮 RDX E-SPORTS ORG OFFICIAL  
টুর্নামেন্ট গ্রুপে জয়েন করার জন্য ধন্যবাদ।

📢 IMPORTANT RULES

➤ সকল আপডেট শুধুমাত্র Admin দের পক্ষ থেকে দেওয়া হবে।  
➤ ম্যাচের সময় ও রুম ইনফো ভালোভাবে খেয়াল রাখবেন।  
➤ কোনো সমস্যা হলে সরাসরি Admin কে ইনবক্স করবেন।  
➤ Admin এর সিদ্ধান্তই চূড়ান্ত।

⚡ Fair Play Only  
🚫 No Hack | No Toxic

🔥 আপনার টিমের জন্য শুভকামনা!
🏆 RDX E-SPORTS ORG OFFICIAL`;

    bot.sendMessage(chatId, welcomeMessage);
});

// এরর হ্যান্ডলিং [cite: 2026-03-07]
bot.on("polling_error", (err) => console.log("Telegram Error:", err.code));
