exports.app = (logger, TelegramBot) =>  {
    const token = process.env.TELEGRAM_API_TOKEN
    logger.info(`Starting bot with token ${token}`);
    const bot = new TelegramBot(token, { polling: true })

    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const messageText = msg.text;
        if(messageText == '/start') {
            bot.sendMessage(chatId, 'Welcome to the bot!');
        } else if(messageText == 'kerin') {
            bot.sendMessage(chatId, 'ee');
        }
    })
}
