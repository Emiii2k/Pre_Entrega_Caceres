/* rfce */
import React from 'react';
import './NavBar.css'
import logos from './logos.png';
import CartWidget from '../CartWidget/cartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className="App">
        <div>   
            <Link className="nav-link" to={'/'}>Inicio</Link>
            <Link className="nav-link" to={'/product/:id'}>Productos</Link>
            <Link className="nav-link" to={'/contact'}>Contacto</Link>
            <Link className="nav-link" to={'/about'}>Nosotros</Link>
        </div>
        <div>
            <img className="nav-log" src={logos} alt="" />
        </div>
        <Link className='cart' to={'/cart'}>
            <CartWidget/>
        </Link>
        </header>
    )
}

