import { useState } from "react"

const Cart = () => {
    const [cart,setCart] = useState({})
    const addToCart = (productId) => {
        setCart()
    }
    return (
        <div>
            <div className="title">Shopping Cart</div>
        </div>
    )
}

export default Cart
