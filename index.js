const { Telegraf } = require("telegraf");

const bot = new Telegraf(`5786631694:AAEfQ2Gbd1BvGsE2segOvAmvNI6sboO1vPY`);

bot.start((ctx) => ctx.reply(`Hello Welcome to the Bot of Shubham Jain`));

bot.on('sticker', (ctx) => ctx.reply(`💖`));

bot.command("shubham", async (ctx) => {
    const res = await fetch(`https://api.github.com/users/shubhamjain287`);
    const data = await res.json();
    return ctx.reply(data.avatar_url)
});

bot.command("sakshi", (ctx) => ctx.reply("Hello Sakshi Raghuwanshi"));

bot.command("yash", (ctx) => ctx.reply("Hello yashwarndhan sharma"));

bot.command("tanveer", (ctx) => ctx.reply("Hello tanveer saini"));

bot.command("shubhanjali", (ctx) => ctx.reply("Hello Shubhanjali !!"));

bot.launch();