import React from 'react'
import { useParams } from 'react-router'

const Usuario = () => {

    let {username} = useParams();
    //let params = useParams();
    //console.log(params);

    return (
        <div>
            <h3>Perfil del usuario</h3>
            <p>Nombre del usurio <b>{username}</b></p>
        </div>
    )
}

export default Usuario
