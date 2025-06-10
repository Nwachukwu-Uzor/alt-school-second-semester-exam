import express from "express";
import cors from "cors"
import 'dotenv/config'

const PORT = process.env.PORT;

const app = express();
app.use(cors())
app.use(express.urlencoded({}))

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})

app.get("/", (_req, res) => {
    return res.json({message: "Ok"})
})