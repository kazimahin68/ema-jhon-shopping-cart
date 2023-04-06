import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

const ReviewItem = ({ product, removeCartItem }) => {
    const { name, img, id, quantity, price, shipping } = product;
    return (
        <div className='border border-[#95A0A7] rounded-md flex items-center justify-between p-2 mb-5 gap-4'>
            <img className='w-24 h-24 flex-none rounded-md' src={img} alt="" />
            <div className='grow'>
                <h2 className='text-semibold text-2xl mb-2'>{name}</h2>
                <p className='mb-2'>Price: <span className='text-orange-400'>${price}</span></p>
                <p>Shipping Charges: <span className='text-orange-400'>${shipping}</span></p>
            </div>
            <button onClick={() => removeCartItem(id)} className='w-14 h-14 rounded-[40px] bg-red-200 text-center p-3 flex-none'>
            <TrashIcon className='text-red-700 w-5 h-5 inline text-center'></TrashIcon>
            </button>
        </div>
    );
};

export default ReviewItem;