import React,{useRef,useEffect,useState} from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import {TiDeleteOutline} from 'react-icons/ti'
import toast, { Toast } from 'react-hot-toast';
import { useStateContext } from '../../../context/StateContext';
import { urlFor } from '../../service/lib/service';
import getStripe from '../../service/lib/getStripe';

import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const Cart = () => {
    const cartRef = useRef();
    const {totalPrice,totalQuantities,cartItems,setShowCart,toggleCartItemsQuantity,onRemove} = useStateContext();
    const handleCheckout = async () => {
        const stripe = await getStripe();
    
        const response = await fetch('/api/stripe', {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json',
            // },
            body: JSON.stringify(cartItems),
        });
      
        if(response.statusCode === 500) return;
          
        const data = await response.json();
      
        toast.loading('Loading...');
      
        stripe.redirectToCheckout({ sessionId: data.id });
    }
    // const [publishablekey, setPublishablekey] = useState('');
    // useEffect(()=>{
    //     fetch('api/stripe',{
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //     })
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setPublishablekey(data.publishablekey);
    //     });
    // })

    // if(!publishablekey){
    //     return 'Loading...';
    // }

    // const stripe = loadStripe(publishablekey);

    return (
        <div className='cart' ref={cartRef}>
            <div className='cart-container'>
                <button
                    type='button'
                    className='cart-heading'
                    onClick={()=>setShowCart(false)}
                >
                    <AiOutlineLeft/>
                    <span className='cart-heading-header me-3'>Your cart</span>
                    <span className='cart-num mx-3'>({totalQuantities} items)</span>
                </button>

                {cartItems.length < 1 && (
                    <div className='cart-empty m-5'>
                        <AiOutlineShopping size={150}/>
                        <h3>Your shopping bag is empty</h3>
                        <Link href='/'>
                            <button
                            type='button'
                            onClick={() => setShowCart(false)}
                            className='cart-empty-btn p-3 mt-5'
                            >   
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}

                <div className='cart-product-container mt-5'>
                    {cartItems.length >= 1 && cartItems.map((item)=>(
                        <div className='cart-product p-5 section' key={item._id}>
                            <img
                                src={urlFor(item?.image[0])}
                                className='cart-product-image w-50'
                            />
                            <div className='cart-item-desc'>
                                <div className='cart-flex cart-top '>
                                    <h5>{item.name}</h5>
                                    <h4>{item.price} $</h4>
                                </div>
                                <div className='cart-bottom'>
                                    <div>
                                        <div className="productDetails-quantity  section">
                                            <span className="minus p-2" onClick={()=>toggleCartItemsQuantity(item._id,'dec')} ><AiOutlineMinus /></span>
                                            <span className="num p-2">{item.quantity}</span>
                                            <span className="plus p-2" onClick={() => toggleCartItemsQuantity(item._id,'inc')}><AiOutlinePlus /></span>
                                        </div>
                                    </div>
                                    <button
                                        type='button'
                                        className='cart-btn-remove'
                                        onClick={() =>onRemove(item)}
                                    >
                                        <TiDeleteOutline/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >= 1 &&(
                    <div className='cart-bot container'>
                        <div className='cart-total'>
                            <h3>Subtotal :</h3>
                            <h4>{totalPrice} $</h4>
                        </div>
                        <div className='cart-btn-container'>
                            <button
                                type='button'
                                className='cart-btn-container-one p-3 mt-5'
                                onClick={handleCheckout}
                            >
                                Pay with stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart 