// Ishlatish: BOT_TOKEN=xxx SITE_URL=https://saytingiz.netlify.app node set-webhook.js
const { BOT_TOKEN, SITE_URL } = process.env;
if (!BOT_TOKEN || !SITE_URL) {
  console.error("BOT_TOKEN va SITE_URL ni kiriting");
  process.exit(1);
}
const url = `${SITE_URL}/.netlify/functions/bot`;
fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook?url=${encodeURIComponent(url)}`)
  .then((r) => r.json())
  .then(console.log);
