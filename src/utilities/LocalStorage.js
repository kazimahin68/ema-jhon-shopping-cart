const addToDb = (id) => {
    let shoppingCart = getShoppingCart();
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// Remove All Cart
const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

// Get Shopping Cart 
const getShoppingCart = () =>{
    let shoppingCart ={};
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}



export {
    addToDb,
    deleteShoppingCart,
    getShoppingCart,
}