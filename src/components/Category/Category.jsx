import { useState } from "react"
import styled from "styled-components"
import Product from "../Product/Product"
import withFetch from "../withFetch"

const Category = ({loading,data}) => {
    const all = 'https://fakestoreapi.com/products'
    const [category,setCategory] = useState(all)
    const ProductWithFetch = withFetch(Product,category)
    const handleClick = (item) => {
        setCategory(`https://fakestoreapi.com/products/category/${item}`)
    }
    if(loading){
        return (
            <div style={{position:'absolute', top:'50vh', left:'50vw'}}>
                <h1>Loading....</h1>
                <p>please wait</p>
            </div>
            
        )
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

export default Category


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
    .links{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        button{
            margin: 1rem;
            color: #071026;
            background-color: #ff6d3d; // #efb833 ;
            border: none;
            border-radius: 25px;
            padding: 0.4rem 1rem;
        }
    }
    .showall{
            background-color: #efb833;
            padding: 0.4rem 1.2rem;
            border: none;
            border-radius: 5px;
        }
`
