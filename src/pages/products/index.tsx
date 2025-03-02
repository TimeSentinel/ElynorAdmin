/* -------------------------------------------
(c)2025 Lance Stubblefield
elynoradmin: src/pages/products/index.tsx
-------------------------------------------- */

import './products.css';
import {useState} from "react";

function ProductsPage() {
    const [curPage, setCurPage] = useState('products')

    const handleSelect = (thing: string) => {
        setCurPage(thing);
        console.log("curPage: ", curPage);
        console.log("thing: ", thing);
    }


    return (
        <div className="productsContainer">
            <div className="productsNavbar">
                <div className="productsTitle">
                    <h2>Products</h2>
                </div>
                <div className="productsNavcell">
                    <button name="products" onClick={() => handleSelect("products")}>Products</button>
                </div>
                <div className="productsNavcell">
                    <button name="options" onClick={() => handleSelect("options")}>Options</button>
                </div>
                <div className="productsNavcell">
                    <button name="categories" onClick={() => handleSelect("categories")} >Categories</button>
                </div>
            </div>
            <div className="productsBody">
                <div className={(curPage === "products") ? "productsProducts divShow" : "productsProducts divHide"}>{curPage}</div>
                <div className={(curPage === "options") ? "productsOptions divShow" : "productsOptions divHide"}>{curPage}</div>
                <div className={(curPage === "categories") ? "productsCategories divShow" : "productsCategories divHide"}>{curPage}</div>
            </div>

        </div>
    )
}

export default ProductsPage;

