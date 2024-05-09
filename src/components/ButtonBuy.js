import React from "react";
import {useContext} from "react";
import {TiendaContext} from "../context/TiendaContext";

const ButtonBuy = ({item}) => {
    const {addCartItem, products} = useContext(TiendaContext);
    const select = products.find(i => i.id === item);

    return (
        <button className="button is-small is-link is-outlined" onClick={e => {addCartItem(select)}}>
            <span className="icon">
                <i className="fas fa-shopping-cart"></i>
            </span>
            <span>Agregar</span>
        </button>
    );
}

export default ButtonBuy;
