import React from "react";
import {useContext} from "react";
import {TiendaContext} from "../context/TiendaContext";

const Cart = () => {
    const {shoppingCart} = useContext(TiendaContext);

    return (
        <div className="container mt-5">
            <div className="columns is-justify-content-center">
                <div className="column is-8 panel">
                    <p className="panel-heading">Productos agregados</p>
                    {
                        shoppingCart.map((item, index) =>
                            <div className="panel-block" key={index}>
                                <span className="panel-icon">
                                    <i className="fas fa-check" aria-hidden="true"></i>
                                </span>
                                {item.title}
                            </div>
                        )
                    }
                    <div className="panel-block">
                        <button className="button is-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
