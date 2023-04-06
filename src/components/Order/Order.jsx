import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItems/ReviewItem';
import { removeFromDb } from '../../utilities/LocalStorage';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const removeCartItem = (id) =>{
        console.log(id);
        const remaining = cart.filter(pd => pd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    console.log(savedCart);
    return (
        <div className='flex'> 
            <div className='basis-8/12 my-64'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} removeCartItem={removeCartItem}></ReviewItem>)
                }
            </div>
            <div className='ms-4 basis-4/12 border border-[#95A0A7] rounded-md bg-[#FFE0B3] my-64'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;