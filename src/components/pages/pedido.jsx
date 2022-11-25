import pub from "../../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pedido.css";

function pedido () {
    const navigate = useNavigate()
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()

    const creatPost = async (e) => {
        e.preventDefault();

        const post = { nome, descricao};

        await pub.post("/mesas",
           post
        )

        navigate("/")

    }


    return (
        <div className="pedido">
        <h1>Pedido</h1>
        <h2>Fazer pedido</h2>
        <form onSubmit={(e) => creatPost(e)}>
            <div className="form-control">
                <label htmlFor="nome">Mesa:</label>
                <input type="text" 
                name="nome" 
                id="mesa" 
                placeholder="Digite o número da mesa"
                onChange={(e) => setNome(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label htmlFor="descricao">Descrição:</label>
                <textarea 
                name="descricao" 
                id="pedido" 
                placeholder="Digite o pedido"
                onChange={(e) => setDescricao(e.target.value)}
                ></textarea>
            </div>
            <input type="submit" value="criar post" className="btn"/>
        </form>
        </div>
    )
    }
    export default pedido;