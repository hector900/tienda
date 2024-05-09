import React from "react";
import {useContext, useEffect, useState} from "react";
import {TiendaContext} from "../context/TiendaContext";
import ProductBox from "../components/ProductBox";
import Header from "../components/Header";
import SearchCategory from "../components/SearchCategory";
import SearchInput from "../components/SearchInput";

const ProductList = () => {
    const {products} = useContext(TiendaContext);
    const [loading, setLoading] = useState('');
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            setLoading('is-invisible');
            setProductList(products);
        }
    }, [products]);

    const filter_category = (c) => {
        const result = products.filter(item => item.category === c);
        setProductList(result);
    }

    const filter_input = (c) => {
        const result = products.filter(item =>
            item.title.toLowerCase().includes(c.toLowerCase())
        );
        setProductList(result);
    }

    return (
        <>
        <Header></Header>
        <progress className={`progress is-small is-primary ${loading}`} max="100"></progress>
        <div className="container">
            <div className="box">
                <SearchInput onFilter={filter_input}></SearchInput>
                <SearchCategory onFilter={filter_category}></SearchCategory>
            </div>

            <div className="columns is-multiline">
                {
                    productList.map(item =>
                        <div className="column is-4" key={item.id}>
                            <ProductBox {...item}></ProductBox>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    );
}

export default ProductList;
