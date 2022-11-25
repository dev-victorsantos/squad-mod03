import pub from "../../axios/config";
import { useState, useEffect } from "react";
import './Cardapio.css';



function cardapio () {

    const [posts, setPosts] = useState ([])

    const getPosts = async() => {
        
        try {
            const response = await pub.get("/cardapio");

            const data = response.data;
            setPosts(data);
            
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        getPosts()

    }, [])
    
    return (
        <div className='cardapio'>
        <h1>Cardápio</h1>
        {posts.length === 0 ? (<p>Carregando...</p>) : (
            posts.map((post) => (
                <div className='post' key={post.id}>
                    <h2>{post.nome}</h2>
                    <img src={post.imagem} />
                    <p>{post.descricao}</p>
                    <h3>{post.preço}</h3>
                </div>
            )))}
        </div>
    );
    }
    export default cardapio;