import { useState } from "react"

import { cadastro } from '../../api/usuarioAPI'

export default function Index () {
    const [nome, setNome] = useState('');

    async function salvarClick() {
        try {
            const r = await cadastro(nome);
            alert('pet cadastrado');
            if (r !== 200) throw new Error('Não foi possível cadastrar o pet');
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <main>
            <input type='text' placeholder='nome' value={nome} onChange={e => setNome(e.target.value)}/>
            <button onClick={salvarClick}>Cadastrar</button>
        </main>
    )
}