# Telegram bot (Netlify)

## O'rnatish
1. @BotFather dan bot yarating va tokenni oling.
2. Papkani GitHub'ga yuklang yoki Netlify'ga drag & drop qiling.
3. Netlify: Site settings -> Environment variables -> `BOT_TOKEN` = tokeningiz.
4. Deploy qiling.
5. Webhookni o'rnating:
   BOT_TOKEN=xxx SITE_URL=https://saytingiz.netlify.app node set-webhook.js
6. Telegramda botga /start yozing.
