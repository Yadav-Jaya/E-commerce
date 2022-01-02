import {  useState } from "react"
import styled from "styled-components"
import Product from "../Product/Product"
import withFetch from "../withFetch"

const Category = ({data}) => {
    const all = 'https://fakestoreapi.com/products'
    const [category,setCategory] = useState(all)
    const ProductWithFetch = withFetch(Product,category)
    const handleClick = (item) => {
        setCategory(`https://fakestoreapi.com/products/category/${item}`)
    }
    return (
        <>
            <CategoryStyle>
                <h1>Shop By Category</h1>
                <div className='links'>
                    {
                        data.map((item) => <button key={item} onClick={()=> handleClick(item)}> {item.charAt(0).toUpperCase()+item.slice(1)} </button>)
                    }
                    
                </div>
                <button className='showall' onClick={()=> setCategory(all)}>Show All</button>
            </CategoryStyle>
            <ProductWithFetch/>

        </>
    )
}

export default withFetch(Category,'https://fakestoreapi.com/products/categories')


const CategoryStyle = styled.aside`
    position: fixed;
    padding: 40px;
    left: 0;
    bottom: 0;
    width: 25%;
    height: 90vh;
    color: #ccd1db;
    background-color: #071026 ;
    h1{
        color:#ccd1db;
    }
    button:hover{
        background-color: transparent;
        color: #efb833;
    }
    .links{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        button{
            margin: 1rem;
            color: #071026;
            background-color: #ccd1db; // #efb833 ;
            border-radius: 25px;
            padding: 0.4rem;
        }
        button:hover{
            border-inline: 5px solid #efb833;
            font-weight: bolder;
        }
    }
    .showall{
            background-color: #efb833;
            padding: 0.4rem 1.2rem;
            border-radius: 5px;
            border: 1px solid #efb833;
        }
`
