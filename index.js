const { Telegraf } = require("telegraf");

const bot = new Telegraf(`5786631694:AAEfQ2Gbd1BvGsE2segOvAmvNI6sboO1vPY`);

bot.start((ctx) => ctx.reply(`Hello Welcome to the Bot of Shubham Jain`));

bot.on('sticker', (ctx) => ctx.reply(`💖`));

bot.command(`Sakshi` , (ctx) => ctx.reply(`Chala Jaa Bsdk Woh sirf Jain ke Hai !!`));

bot.command("shubham", async (ctx) => {
    const res = await fetch(`https://api.github.com/users/shubhamjain287`);
    const data = await res.json();
    console.log(data);
    return ctx.reply(data.avatar_url)
})

bot.launch();