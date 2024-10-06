import React from "react";
import './DescriptionBox.css'

const Description = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="description-nav-box">Description</div>
                <div className="description-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet.
                     It provides users with a convenient way to browse a wide range of products, compare prices, read reviews, and make purchases through secure payment methods.
                      Sellers can manage their inventories, promote their products, and track orders. The platform may also offer additional features such as customer support, shipping options, and return policies to enhance the overall shopping experience.</p>
            </div>
        </div>
    )
}

export default Description