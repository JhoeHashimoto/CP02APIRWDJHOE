import React, {useEffect,useState} from "react";
import axios from "axios";


interface User{
    id:number;
    name:string;
    email:string;
}


const UsersA: React.FC = () =>{
        //FORMA FETCH

//     //state para armazenar os usuários
     const [users,setUsers] = useState<User[]>([]);
//     //carregar os dados da api
//     useEffect(() =>{
//         const fetchUsers = async () =>{
//             const response = await fetch('https://jsonplaceholder.org/users');
//             const data = await response.json();
//             SetUsers(data);

//         };
//         fetchUsers();
// },[]);

        //FORMA AXIOS


        useEffect(() =>{
            const fetchUsers = async ()=>{
                try{
                    //REALIZAR A REQUISIÇÃO HTTP UTILIZANDO AXIOS
                    const response = await axios.get('https://jsonplaceholder.org/users')
                    setUsers(response.data);
                }

                catch(error){
                    //tratamento de erro
                    console.error('ERRO AO BUSCAR DADOS', error);
                }
            };
            fetchUsers();
        })

    return(
        <div>
            <h1>USUÁRIOS:</h1>
            <p>//NPM INSTALL AXIOS</p>
            <ul>
                {users.map(usuario =>(
                    <li key={usuario.id}>
                        <p>ID:{usuario.id}</p>
                        <p>NOME: {usuario.name}</p>
                        <p>E-MAIL: {usuario.email}</p>
                    </li>
                ))}

            </ul>
        </div>
    )
}


export default UsersA;
