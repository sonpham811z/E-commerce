import React, {createContext,useState, useEffect} from "react";
import all_products from "../components/Assets/all_product"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for(let i = 0; i < all_products.length+1; i++){
        cart[i] = 0
    }
    
    return cart
}


const ShopcontextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart())

    useEffect(() => {
        console.log(cartItems);
      }, [cartItems]); // This runs every time cartItems is updated
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItems);
        
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }


    const getTotalCarAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_products.find((product)=>product.id===Number(item))
                totalAmount += cartItems[item] * itemInfo.new_price
            }
        }
        return totalAmount;
    }

    const getTotalItem = () => {
        let totalItem = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }
        }

        return totalItem
    }
    const contextValue = {getTotalItem,getTotalCarAmount,all_products,cartItems,addToCart,removeFromCart}

  
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopcontextProvider