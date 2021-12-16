import styled from "styled-components";

export const ProductStyle = styled.div`
    position: relative;
    padding: 2rem;
    left: 25%;
    width: 75%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    gap: 10px;
    
    * {
        margin: 5px;
    }
    .product{
        margin: 2rem;
        padding: 1.5rem;
        background-color: white;
        width: max(350px, 85%); //min(400px, 80%);
        height: 400px;
        border-radius: 12px;
        box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.198);
        
        // Layout 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }   
        
    }
    .image{
            height: 35%;
            img{
                height: 100%;
            }
        }
    .price{
        font-family: 'Courier New', Courier, monospace;
        font-size: large;
        font-weight: bolder;
    }

    .buttons{
        display: flex;
        justify-content: space-around;
        .buy{
            background-color: #ff6d3d ;
        }
    }
    button{
        background-color: #efb833 ;
        border: none;
        border-radius: 5px;
        padding: 0.4rem 1rem;
    }
    button:hover{
        //background-color: #ff6d3d;
        box-shadow: 0px 0px 12px 4px rgba(27, 27, 27, 0.377);
    }
`
    /*
    img{
        width: 20%;
    }
    
    
    }*/
export default ProductStyle;
 