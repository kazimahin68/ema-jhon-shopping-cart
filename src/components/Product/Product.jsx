import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Product = ({ product, handleAddToCart}) => {
   

    // console.log(product)
    const { img, name, price, seller, ratings, quantity } = product;
    return (
        <div className='border border-[#95A0A7] rounded-md relative'>
            <div className='m-2 mb-24'>
                <img className='w-72 h-72 rounded-md' src={img} alt="" />
                <h6 className='font-semibold text-xl'>{name}</h6>
                <p className='font-semibold text-lg'>Price: ${price}</p>
                <p className='mt-6'>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='bg-[#FFE0B3] hover:bg-orange-500 border border-[#95A0A7] absolute w-full rounded-b-md bottom-0 p-5 font-semibold'>Add to cart<ShoppingCartIcon className='text-black w-5 h-5 inline ms-2'></ShoppingCartIcon></button>
        </div>
    );
};

export default Product;