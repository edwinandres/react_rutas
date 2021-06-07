import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const MenuConceptos = () => {
    return (
        <nav>
            <ol>
                <li>
                    <span>Enlaces html(no recomendado)</span>
                    <a href='/'>Home</a>
                    <a href='/acerca'>Acerca</a>
                    <a href='/contacto'>Contacto</a>
                </li>
                <li>
                    {/* el componente link evita renderizar nuevamente la pagina */}
                    <span>Componente Link</span>
                    <Link to='/'>Home</Link>
                    <Link to='/acerca'>Acerca</Link>
                    <Link to='/contacto'>Contacto</Link>
                    <Link to='/no-existe'>Error 404</Link>
                </li>
                <li>
                {/* NavLink funciona igual que link pero permite poner clases a la clase activa*/}
                <span>Componente NavLink</span>               
                    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                    <NavLink exact to='/acerca' activeClassName='active'>Acerca</NavLink>
                    <NavLink exact to='/contacto' activeClassName='active'>Contacto</NavLink>
                    <NavLink exact to='/no-existe'>Error 404</NavLink>
                </li>
                <li>
                    <span>Parámetros: </span>
                    <Link to='/usuario/jonmircha'>jonmircha</Link>
                    <Link to='/usuario/kenai'>kenai</Link>
                </li>

            </ol>

        </nav>
    )
}

export default MenuConceptos
