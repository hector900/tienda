import React from "react";
import { Link } from "react-router-dom";
import TiendaLogo from "../logo.svg";
import CartCount from "./CartCount";

const Header = () => {
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item" href="/">
                    <img src={TiendaLogo} alt="React Logo" />
                    <p>Tienda</p>
                </div>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Inicio
                    </Link>
                    <Link to="/faq" className="navbar-item">
                        Preguntas frecuentes
                    </Link>
                </div>

                <div className="navbar-end">
                    <Link to="/shopping-cart" className="navbar-item">
                        <CartCount></CartCount>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;
