import React,{useState,useContext,useEffect,createContext} from "react";

import {toast} from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [totalPrice, settotalPrice] = useState(0);
    const [totalQuantities, settotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const onAdd = (product,quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        settotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        settotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        if(checkProductInCart){    
            const updateCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity:cartProduct.quantity + quantity
                }
            })
            setcartItems(updateCartItems);
        }
        else {
            product.quantity = quantity;
            setcartItems([...cartItems, {...product}]);
        }
        toast.success(`${qty} ${product.name} added to the cart.`);
    }
    let foundProduct;
    let index;

    const toggleCartItemsQuantity = (id,value) => {
        foundProduct = cartItems.find((item)=>item._id === id)
        index = cartItems.findIndex((product)=>product._id === id)   
        let newCartItems = cartItems.filter((item)=>item._id !== id);
        
        if(value === 'inc'){
            setcartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity+1}]);
            settotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            settotalQuantities(prevTotalQuantities => prevTotalQuantities+1)
        }
        else if(value === 'dec'){
            if(foundProduct.quantity > 1){
                setcartItems([...newCartItems,{...foundProduct,quantity:foundProduct.quantity-1}]);
                settotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                settotalQuantities(prevTotalQuantities => prevTotalQuantities-1)
            }
        }
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item)=>item._id === product._id);
        let newCartItems = cartItems.filter((item)=>item._id !== product._id);

        settotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price * foundProduct.quantity);

        settotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);

        setcartItems(newCartItems);
    }

    const incQty = () => {
        setQty((prevQty) => prevQty+1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    return(
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                setShowCart,
                toggleCartItemsQuantity,
                onRemove
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);