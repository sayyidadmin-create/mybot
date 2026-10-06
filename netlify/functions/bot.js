// Telegram bot - Netlify Function (webhook)
const TOKEN = process.env.BOT_TOKEN;
const API = `https://api.telegram.org/bot${TOKEN}`;

async function sendMessage(chatId, text) {
  await fetch(`${API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 200, body: "Bot ishlayapti ✅" };
  }

  try {
    const update = JSON.parse(event.body);
    const message = update.message;
    if (!message || !message.text) return { statusCode: 200, body: "ok" };

    const chatId = message.chat.id;
    const text = message.text.trim();
    const name = message.from?.first_name || "do'stim";

    if (text === "/start") {
      await sendMessage(
        chatId,
        `Salom, <b>${name}</b>! 👋\nBotimizga xush kelibsiz.\n\nBuyruqlar:\n/start - boshlash\n/help - yordam`
      );
    } else if (text === "/help") {
      await sendMessage(chatId, "Yordam: menga istalgan xabar yozing, men javob beraman.");
    } else {
      await sendMessage(chatId, `Siz yozdingiz: ${text}`);
    }
  } catch (err) {
    console.error(err);
  }

  // Telegramga doim 200 qaytaramiz, aks holda u so'rovni qayta yuboraveradi
  return { statusCode: 200, body: "ok" };
};
