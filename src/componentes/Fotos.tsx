import React, { useEffect, useState } from "react";


function Fotos() {

    //CRIANDO A FUNÇÃO FOTOS
    const [fotos, setFotos] = useState([]);

 
    useEffect(() => {
     
      //CRIANDO A FUNÇÃO ASSINCRONA
      const buscarUsuarios = async () => {
        
        //INICIANDO A REQUISIÇÃO
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            
            const dadosFotos = await response.json();
            setFotos(dadosFotos);
        }
        //EM CASO DE ERRO O CONSOLE IRÁ PRINTAR ERRO
        catch{
          console.log("ERRO")
        }
      };
      

      //CHAMANDO A FUNÇÃO NA MÃO
      buscarUsuarios();

    }, []); 
    
   //CRIANDO A LISTA E EXIBINDO AS IMAGENS
    return(
        <>
        <h1 className="font-extrabold text-left text-lg">LISTA DE FOTOS</h1>
        <h2 className="font-semibold text-left text-sm">API DE fotos:https://jsonplaceholder.typicode.com/photos</h2>

       <br></br>
        <ul>
            {fotos.map(fotos =>(
               <li>
                <h1 className="text-left font-extrabold">{fotos.id}° FOTO:</h1>
                        <p className="text-left">{fotos.id}</p>
                        <h2 className="text-left font-semibold ">Título: {fotos.title}</h2>
                        <p className="text-left">{fotos.url}</p>
                        <p className="text-left">{fotos.thumbnailUrl}</p>
                        <img src={fotos.url} className="w-32 h-auto"></img>
                        <br></br>
                        <br></br>
                </li>
            ))}
        </ul>

        </>
    )
}




export default Fotos;