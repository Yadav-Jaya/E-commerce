import { createContext, useState } from "react"
import Product from "../components/Product/Product"

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [data,setData] = useState([])
    //const all = 'https://fakestoreapi.com/products'
    //const [category,setCategory] = useState('https://fakestoreapi.com/products')
   // const handleClick = (item) => {
    //    setCategory(`https://fakestoreapi.com/products/category/${item}`)
    //}

    return (
        <ProductContext.Provider value={{setData}}>
            {props.children}
        </ProductContext.Provider>
    ) 
}

export default ProductContextProvider
