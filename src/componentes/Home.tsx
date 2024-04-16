import React from "react";


const Home: React.FC = () =>{
    return(
        
        <div>
            <h1 className="text-3xl font-semibold">HOME</h1>
            <br></br>
            <h2 className="text-1xl font-semibold">CHECKPOINT CONSUMINDO A API:</h2>
            <body className="flex justify-center items-center h-screen">
            <p className="text-5xl text-center">https://jsonplaceholder.typicode.com/</p>
            </body>
        </div>
    )
}




export default Home;