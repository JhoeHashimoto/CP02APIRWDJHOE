import React, { useEffect, useState } from "react";

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface Usuario {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address; 
}

function Usuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const dadosUsuarios = await response.json();
                setUsuarios(dadosUsuarios);
            } catch(error) {
                console.log("Erro ao buscar usuários:", error);
            }
        };
        fetchUsuarios();
    }, []); 
    
    return (
        <div className="container mx-auto">
            <h1 className="font-extrabold text-center text-lg mb-2">LISTA DE USUÁRIOS</h1>
            {usuarios.map(usuario => (
                <table key={usuario.id} className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden mb-8">
                        <tr className="bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2"><h1 className="font-bold">ID:</h1></td>
                            <td className="border border-gray-300 px-4 py-2">{usuario.id}</td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="border border-gray-300 px-4 py-2"><p>Name:</p></td>
                            <td className="border border-gray-300 px-4 py-2">{usuario.name}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2"><p>Username:</p></td>
                            <td className="border border-gray-300 px-4 py-2">{usuario.username}</td>
                        </tr>
                        <tr className="bg-gray-200">
                            <td className="border border-gray-300 px-4 py-2"><p>Email:</p></td>
                            <td className="border border-gray-300 px-4 py-2">{usuario.email}</td>
                        </tr>
                        {usuario.address && (
                            <tr className="bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2"><p>Cidade:</p></td>
                                <td className="border border-gray-300 px-4 py-2">{usuario.address.city}</td>
                            </tr>
                        )}
                </table>
            ))}
        </div>
    );
}

export default Usuarios;