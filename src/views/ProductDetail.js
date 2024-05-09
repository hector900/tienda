import React from 'react';
import { useContext } from 'react';
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import { TiendaContext } from '../context/TiendaContext';

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = useContext(TiendaContext);

    const product = products.find(item => item.id === parseInt(productId));

    if (!product) {
        return (
            <>
                <Header></Header>
                <h2>Producto no encontrado</h2>;
            </>
        );
    }

    return (
        <>
            <Header></Header>
            <div className="columns is-centered p-6">
                <div className="column is-7 box">
                    <h2 className="title">{product.title}</h2>
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <figure className="image">
                                <img src={product.image} alt={product.title} />
                            </figure>
                        </div>
                    </div>
                    <p><span className="tag is-link is-light mb-3">Precio: $ {product.price}</span></p>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
