const TelegramBot = require('node-telegram-bot-api');
const http = require('http');

// ১. Render-এর পোর্ট এরর এবং স্লিপ মোড প্রতিরোধের জন্য সার্ভার [cite: 2026-03-07]
http.createServer((req, res) => {
  res.write('Bot is live and running!');
  res.end();
}).listen(process.env.PORT || 3000);

// ২. আপনার নতুন টোকেন (নিশ্চিত হয়ে এখানে বসান) [cite: 2026-03-07]
const token = '8628945913:AAHaYX_ZAHXhyj8JcrNjADBkKtIqzX6FowA';
const bot = new TelegramBot(token, {polling: true});

console.log("RDX E-Sports বট এখন মেম্বারদের জন্য প্রস্তুত... 🔥");

// ৩. নতুন মেম্বার জয়েন করলে ওয়েলকাম মেসেজ [cite: 2026-01-15, 2026-03-07]
bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    // যারা জয়েন করেছে তাদের নাম বের করা [cite: 2026-03-07]
    msg.new_chat_members.forEach((user) => {
        const welcomeMessage = `╔════════════════════╗
      🏆 WELCOME 🏆
╚════════════════════╝

👋 স্বাগতম ${user.first_name}!

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

        bot.sendMessage(chatId, welcomeMessage).catch((error) => {
            console.log("মেসেজ পাঠাতে সমস্যা:", error.code); // এরর হলে লগে দেখাবে [cite: 2026-03-07]
        });
    });
});

// পোলিং এরর ডিবাগিং
bot.on("polling_error", (err) => {
    if (err.code === 'ETELEGRAM') {
        console.log("টেলিগ্রাম এরর: সম্ভবত একই টোকেন দিয়ে অন্য কোথাও বট চলছে।");
    } else {
        console.log("Error:", err.code);
    }
});
