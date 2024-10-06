import React,{useContext} from "react";
import {ShopContext} from "../Context/ShopContext";

import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import Description from "../components/DescriptionBox/Description";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts"

const Product = () => {

    const {all_products} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_products.find((e) => e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <Description/>
            <RelatedProducts/>
        </div>
    )
}

export default Product