import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const Cart = ({cart, removeAllFromCart}) => {
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        // console.log(product.quantity);
        // product.quantity = product.quantity || 1;
        total = total + (product.price * product.quantity);
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div>
            <div className='p-5'>
            <h4 className='text-center font-semibold mb-7 text-2xl'>Order Summery</h4>
            <p className='mb-4'>Selected Item: {quantity}</p>
            <p className='mb-4'>Total Price: ${total}</p>
            <p className='mb-4'>Total Shipping Charge: ${totalShipping}</p>
            <p className='mb-4'>Tax: ${tax.toFixed(2)}</p>
            <p className='font-semibold text-xl'>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
        <div className='p-4'>
            <button onClick={removeAllFromCart} className='bg-[#FF3030] hover:bg-orange-500 border border-[#95A0A7] rounded-md bottom-0 p-3 font-bold w-full text-center'>Clear Cart<TrashIcon className='text-black w-4 h-4 inline ms-2'></TrashIcon></button>
            <button> Review Order</button>
        </div>
        </div>
    );
};

export default Cart;