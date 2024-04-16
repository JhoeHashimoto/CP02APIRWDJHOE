import React, { useEffect, useState } from "react";

function Fotos() {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        const buscarFotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const dadosFotos = await response.json();
                setFotos(dadosFotos);
            } catch(error) {
                console.log("Erro ao buscar fotos:", error);
            }
        };

        buscarFotos();
    }, []); 
    
    return (
        <div className="container mx-auto">
            <h1 className="font-extrabold text-left text-lg">LISTA DE FOTOS</h1>
            <h2 className="font-semibold text-left text-sm">API DE fotos: https://jsonplaceholder.typicode.com/photos</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 mt-3">
                {fotos.map((foto, index) => (
                    <li key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h1 className="font-extrabold text-lg">{foto.id}° Foto</h1>
                        <h2 className="font-semibold">Título: {foto.title}</h2>
                        <p className="font-semibold text-sm">Url: {foto.url}</p>
                        <div className="flex justify-center">
                            <img src={foto.url} alt={foto.title} className="max-w-full h-auto" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Fotos;