import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/userRouter.js'

const app = express()
app.use(express.json())
app.use("/user", userRouter)

//conexão com o mongo
mongoose.connect('mongodb+srv://willacosta873:012345@frameworkproject.nads3jz.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro de conexão: " + err);
})


app.get("/", (req, res) => {
    res.send("Hello World")
})


export default app