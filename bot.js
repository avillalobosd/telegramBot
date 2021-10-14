const {Telegraf} = require('telegraf')

const bot = new Telegraf('2054324608:AAEYFLpRi961ItBV9hmyRlBWAF9VCvgt-Wc')

bot.start((ctx)=>{

    ctx.reply("INICIAR")

})
bot.help((ctx)=>{

    ctx.reply("ayuda")

})
bot.launch()