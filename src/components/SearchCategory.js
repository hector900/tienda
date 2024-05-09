import React from "react";
import { useCategory } from "../hooks/useCategory";

const SearchCategory = ({onFilter}) => {
    const category = useCategory();

    const categories = category.map((item, index) =>
        <span className="tag is-link is-light is-clickable" key={index} onClick={e => onFilter(item)}>{item}</span>
    );

    return (
        <div className="tags mt-2">
            {categories}
        </div>
    );
}

export default SearchCategory;
