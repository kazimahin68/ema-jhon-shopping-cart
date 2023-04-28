import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/LocalStorage';
import { BanknotesIcon } from '@heroicons/react/24/solid';
import './Order.css';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const removeCartItem = (id) =>{
        console.log(id);
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const removeAllFromCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    // console.log(savedCart);
    return (
        <div className='flex'> 
            <div className='basis-8/12 my-64'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} removeCartItem={removeCartItem}></ReviewItem>)
                }
            </div>
            <div className='ms-4 basis-4/12 border border-[#95A0A7] rounded-md bg-[#FFE0B3] my-64'>
                <Cart cart={cart} removeAllFromCart={removeAllFromCart}>
                    <Link to="/checkout">
                        <button className='bg-[#FF9900] hover:bg-orange-700 border border-[#95A0A7] rounded-md bottom-0 p-4 font-bold w-full text-center mt-3 flex justify-between items-center'>Proceed To Checkout <BanknotesIcon className='text-white w-5 h-5 inline ms-2 font-bold'></BanknotesIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;