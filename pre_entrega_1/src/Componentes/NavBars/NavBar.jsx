/* rfce */
import React from 'react';
import './NavBar.css';
import logos from './logos.png';
import CartWidget from '../CartWidget/cartWidget';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function NavBar() {
    return (
        <Navbar bg="primary" expand="lg">
            <Container>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logos}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Puro Palo
                </Navbar.Brand>
                    <Nav className='me-auto nav navbar-nav navbar-center' >  
                        <Link className="nav-link" to={'/'}>Inicio</Link>
                        <Link className="nav-link" to={'/product/mesa'}>Mesas</Link>  
                        <Link className="nav-link" to={'/product/muebles'}>Muebles</Link>
                        <Link className="nav-link" to={'/product/sillas'}>Sillas</Link>
                    </Nav>    
                    <Link className='cart nav navbar-nav navbar-right' to={'/cart'}>
                        <CartWidget/>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

