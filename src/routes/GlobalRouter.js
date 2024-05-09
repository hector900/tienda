import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import ProductList from '../views/ProductList';
import ProductDetail from '../views/ProductDetail';
import Faq from '../views/Faq';
import ShoppingCart from '../views/ShoppingCart';

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default GlobalRouter;
