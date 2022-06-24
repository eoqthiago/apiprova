import { useEffect, useState } from "react"

import { listar } from '../../api/usuarioAPI'

export default function Index() {

    const [ pet, setPet] = useState([]);

    async function carregar () {
        const r = await listar();
        setPet(r);

    }

    useEffect(() => {
        carregar();
    }, [])

    return (
        <main>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME PET</th>
                </tr>
                </thead>
                <tbody>
                    {pet.map(item => 
                        
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                    </tr>

                    )}
                </tbody>
            </table>
        </main>
    )
}