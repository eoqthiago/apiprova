import React from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
    return (
        <main>
            <h1>AZURE PETS</h1>
            <ul>
                <li><Link to='/cadastro'>Cadastro</Link></li>
                <li><Link to='/consulta'>Consulta</Link></li>
            </ul>
        </main>
    );
}