import express from 'express'

const app = express()
const PORT = parseInt(process.env.PORT || '3000')

app.get("/", (req, res) => res.json({
    message : "Hello Application, it works perfectly"
}))

app.listen(PORT, () => console.log(`App is Runing on ${PORT}`))