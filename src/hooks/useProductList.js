import { useEffect, useState } from "react";

export const useProductList = () => {

    const url = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
        .catch(error => {console.error(error)});

    }, []);

    return {products};
}
