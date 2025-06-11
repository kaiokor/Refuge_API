import express from "express"
import connectToDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js";
import cors from 'cors'

const conexao = await connectToDatabase();
conexao.on("error", (erro) => { console.error("Erro na conexão", erro) })
conexao.once("open", () => console.log("Conexão feita com sucesso!"))

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))
routes(app)

export default app
