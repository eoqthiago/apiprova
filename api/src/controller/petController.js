import {criarPet, todosPet} from '../repository/petRepository.js'

import { Router } from 'express'
const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const petInserir = req.body
        const petAdicionado = await criarPet(petInserir)
        resp.send(petAdicionado)
        
    } catch (erro) {
        resp.status(400).send({
            error: erro.message
        })
    }
})

server.get('/pet', async (req, resp) => {
    try {
        const resposta =  await todosPet()
        resp.send(resposta)
    } catch (erro) {
        resp.status(400).send({
            error: erro.message
        })
    }
})



export default server;