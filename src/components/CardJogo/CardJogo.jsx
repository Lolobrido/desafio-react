import React from "react";

function CardJogo({capa, titulo, generos, preco, onsale}) {
    return (
        <section className = "card-jogo">
            <img src={capa} alt={`Capa de ${capa}`} className = "empresa"/>
            <h2>
                {titulo} <span className = {`status ${onsale ? 'PROMOÇÃO' : ''}`}/>
            </h2>
            <h3>
                {"Preço: R$" + preco} <span className = {`status ${onsale ? 'PROMOÇÃO' : ''}`}/>
            </h3>
            <p>{generos}</p>
        </section>
    )
}

export default CardJogo