import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/LocalStorage';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() =>{
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    } , []);

    useEffect(() =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // console.log(storedCart); Step 1 : get id
        for(const id in storedCart){
            // console.log(id); Step 2: get product by using id
            const addedProduct = products.find(product => product.id === id);
            // console.log(addedProduct); step 3: get and set quantity to our product quantity property.
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity; 
                // step 4: add the products to new array
                savedCart.push(addedProduct);
            }
            // console.log(savedCart);
            setCart(savedCart);
        }
    },[products])
    // console.log(products)
    const handleAddToCart = (product) =>{
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        // console.log(exists);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product.id);
    }
    const removeAllFromCart = () =>{
        deleteShoppingCart();
    }

    return (
        <div className='flex mt-20'>
            <div className='basis-3/4 grid grid-cols-3 gap-11'>
            {
                products.map(product => <Product key ={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
            }
            </div>
            <div className='ms-4 basis-1/4 border border-[#95A0A7] rounded-md bg-[#FFE0B3]'>
                <Cart cart={cart} removeAllFromCart={removeAllFromCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;