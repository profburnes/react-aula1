import React from 'react'

export default (props) => 
    <>
       <div className="coluna">
           <h1>{props.titulo}</h1>
           <img src={props.img} alt={props.titulo}/>
            <p>{props.descricao}</p>
        </div>
    </>