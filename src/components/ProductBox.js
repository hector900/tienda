import React from "react";
import { Link } from "react-router-dom";
import ButtonBuy from "../components/ButtonBuy";

const ProductBox = ({id, title, category, description, image, price}) => {

    return (
        <div className="box">
            <span className="tag is-info">{category}</span>
            <div className="columns">
                <div className="column is-6">
                    <figure className="image">
                        <img src={image} alt={title} />
                    </figure>
                </div>
                <div className="column">
                    <p><strong>{title}</strong></p>
                    <p className="mt-2 mb-3">
                        {
                            description.length > 50 ?
                            `${description.substring(0, 50)}...` : description
                        }
                    </p>
                    <p><span className="tag is-link is-light">$ {price}</span></p>
                    <br></br>
                    <div className="buttons">
                        <Link to={`/products/${id}`} className="button is-primary is-outlined is-small mt-3">
                            Ver Detalles
                        </Link>
                        <ButtonBuy item={id}></ButtonBuy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductBox;
