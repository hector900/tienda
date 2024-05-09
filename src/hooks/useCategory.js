import { useEffect, useState } from "react";

export const useCategory = () => {

    const url = 'https://fakestoreapi.com/products/categories';

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCategories(data);
        })
        .catch(error => {console.error(error)});

    }, []);

    return categories;
}
