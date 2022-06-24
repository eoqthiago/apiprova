
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastro (nome) {
    const respost = await api.post('/pet', {
        nome: nome
    })
    return respost.data;
}

export async function listar() {
    const respost = await api.get('/pet');
    return respost.data
}