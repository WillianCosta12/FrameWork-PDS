import express from 'express';

import Usuario from '../model/usuario.js';

const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    const users = await Usuario.find()
    res.send(users)
})

userRouter.post("/add", async (req, res) => {

    const user = new Usuario({
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha,
    })

    await user.save();

    res.send(user);

})

userRouter.delete("/delete/:id", async (req, res) => {

    const user = await Usuario.findByIdAndDelete(req.params.id)
    res.send(user)

})

userRouter.put("/update/:id", async (req, res) => {
    
    const user = await Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha,
    }, {
        new: true
    })
    res.send(user)

})


export default userRouter