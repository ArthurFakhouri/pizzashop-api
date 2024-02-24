import { Elysia } from "elysia";

const app = new Elysia()

app.get('/', () => {
    console.log("Hello World")
})

app.listen(3333, () => {
    console.log(" 🔥 HTTP server running 🚀☕")
})