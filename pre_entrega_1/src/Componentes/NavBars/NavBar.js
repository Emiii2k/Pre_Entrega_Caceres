/* rfce */
import React from 'react';
import './NavBar.css'
import logos from './logos.png';
import CartWidget from '../CartWidget/cartWidget';

export default function NavBar() {
    return (
        <header className="App">
        <div>   
            <a className="nav-link" href="/">Inicio</a>
            <a className="nav-link" href="/productos">Productos</a>
            <a className="nav-link" href="/contacto">Contacto</a>
            <a className="nav-link" href="/nosotros">Nosotros</a>
        </div>
        <div>
            <img className="nav-log" src={logos} alt="" />
        </div>
        <div>
            <CartWidget/>
        </div>
        </header>
    )
}

