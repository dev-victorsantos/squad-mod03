import pub from "../../axios/config";
import { useState, useEffect } from "react";
import './Mesas.css';


function Mesas () {

    const [posts, setPosts] = useState ([])

    const getPosts = async() => {
        
        try {
            const response = await pub.get("/mesas");

            const data = response.data;
            setPosts(data);
            
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {

        getPosts()

    }, [])

    const [BodyRota, setBodyRota] = useState();
    const [nome,setNome] = useState();
    const [descricao,setComentário] = useState();
    const editaPost = async (e) => {
        e.preventDefault();
        const editaPost = {nome,descricao};
        const bodyRotaId = BodyRota;
        await pub.put("/mesas/" + bodyRotaId, editaPost);
        
    }

    const deletaPost = async (e) => {
        e.preventDefault();
        const bodyRotaId = BodyRota;
        await pub.delete("/mesas/" + bodyRotaId); 
    }


    return (
        <div className="mesas">
        <h1>Mesas</h1>
        <h2>Para limpar a mesa é só colocar o número dela e apertar o botão limpar mesa!</h2>
        <h2>Para editar a mesa só colocar mesa e o número, escrever a edição e apertar editar pedido!</h2>
        <form>
        <div className="formulario">
        <label htmlFor="nome">Limpar Mesa:</label>
        <input type="number" name="idBodyRota" id="idBodyRota" placeholder="Numero da mesa!" onChange={(e) => setBodyRota(e.target.value)}></input>
        <label htmlFor="nome">Editar Mesa:</label>
        <input type="text" name="Nome" placeholder="Digite mesa e o número!" id="nomeCaixa" onChange={(e) => setNome(e.target.value)}></input>
        <label htmlFor="nome">Editar:</label>
        <textarea name="Comentário" id="Comentário" placeholder="Editar mesa!" onChange={(e) => setComentário(e.target.value)}></textarea>
        <button value="Atualiza Post" className='butao2' onClick={(e) => editaPost(e)}>Editar Pedido!</button>
        <button value="Deleta Post" className='butao3' onClick={(e) => deletaPost(e)}>Limpar Mesa</button>
        </div>
        </form>
        {posts.length === 0 ? (<p>Carregando...</p>) : (
            posts.map((post) => (
                <div className='postm' key={post.id}>
                    <h2>{post.nome}</h2>
                    <p>{post.descricao}</p>
                    </div>

            )))}
        </div>
    );
    }
    export default Mesas;