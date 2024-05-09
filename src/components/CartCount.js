import React from "react";
import {useContext} from "react";
import {TiendaContext} from "../context/TiendaContext";

const CartCount = () => {
    const {shoppingCart} = useContext(TiendaContext);

    return (
        <button className="button is-link is-outlined">
            <span>{shoppingCart.length}</span>
            <span className="icon">
                <i className="fas fa-shopping-cart fa-lg"></i>
            </span>
        </button>
    );
}

export default CartCount;
