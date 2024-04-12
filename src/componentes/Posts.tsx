import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const dadosPosts = await response.json();
                setPosts(dadosPosts);
            } catch(error) {
                console.log("Erro ao buscar posts:", error);
            }
        };
        fetchPosts();
    }, []); 
    
    return (
        <>
            <h1 className="font-extrabold text-left text-lg">LISTA DE POSTS</h1>
            <br></br>
            <ul>
                {posts.map(post => (
                    <li>
                        <h1 className="text-left font-extrabold">{post.id}° POST:</h1>
                        <p className="text-left">{post.id}</p>
                        <h2 className="text-left font-semibold ">Título: {post.title}</h2>
                        <p className="text-left">{post.body}</p>
                        
                        <br></br>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Posts;