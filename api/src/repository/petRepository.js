
import { con } from './connection.js'



export async function criarPet(pet) {
    const comando = `INSERT INTO TB_PET (id_pet, nm_pet)
    VALUES (?, ?)`

    const resposta = await con.query(comando, [pet.id, pet.nome])
    pet.id = resposta.insertId;

    return pet
}


export async function todosPet() {
    const comando = `
    SELECT id_pet			id,
        nm_pet			nome
    FROM TB_PET`

    const [resposta] = await con.query(comando)
    return resposta
}
