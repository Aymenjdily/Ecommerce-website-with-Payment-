import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import {BiMoon} from 'react-icons/bi'
import Cart from '../Cart/Cart'
import Link from 'next/link'
import { useStateContext } from '../../../context/StateContext'

const Navbar = (props) => {
    const {showCart,setShowCart,totalQuantities} = useStateContext();
    return (
        <div className='navbar container'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <Link href='/'>
                        <h2>{props.NavbarLogo}</h2>
                    </Link>
                </div>

                <div className='navbar-menu'>
                    <button type='button' className='navbar-cart' onClick={()=>setShowCart(true)}>
                        <FiShoppingBag className='navbar-icon'/>
                        <span className='navbar-cart-quantity'>{totalQuantities}</span>
                    </button>
                </div>

                {showCart && <Cart/>}
            </div>
        </div>
    )
}

export default Navbar