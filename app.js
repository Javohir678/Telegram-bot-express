import express from "express"
import { Telegraf } from "telegraf"
import { message } from 'telegraf/filters'
import cors from "cors"
import ServerlessHttp from "serverless-http"
const bot = new Telegraf("7653305836:AAGqvMULbh5lkUM-5S-goWY30W7CvNW_zII")
const app = express()

app.use(cors())
bot.start('start', context => context.reply('Welcome'))

bot.on(message("sticker"), ctx => ctx.reply('😎'))

bot.command("oldschool", ctx => ctx.reply("Hello"))

bot.telegram.setMyCommands([
    {
        command: 'test',
        description: "Test command",
    },
    {
        command: 'greetings',
        description: "Greetings command",
    },
    {
        command: 'coddycamp',
        description: "Coddycamp ochilovtdi kutib turing...",
    },
])
bot.command("coddycamp", ctx =>
    ctx.reply("Welcome! Open the mini app below", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Open Web App",
                        web_app: {
                            url: "https://go.coddycamp.uz/account/"
                        },
                    },
                ],
            ],
        },
    })
);
bot.command("test", ctx =>
    ctx.reply("Salom nima qilmaoqchisiz?", {
    }),
)
bot.command("greetings", ctx =>
    ctx.reply("Salom nimadan boshlamoqchisiz?", {
    }),
)
bot.launch()
app.get("/", (req, res) => {
    res.send("salom")
})

export const handler = ServerlessHttp(app)
// app.listen(3000, () => {
//     console.log('Listening on http://localhost:3000');

// })
