import CartContext from "./cart-context";

const cartProvider=(props)=>{
    const addItemToCartHandler=item=>{};
    const removeItemFromCart=id=>{};


    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCart
    }

   return <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
}

export default cartProvider;