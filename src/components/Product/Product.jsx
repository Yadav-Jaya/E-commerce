import ProductStyle from './ProductStyle'
const Product = ({data, addToCart}) => {
    return ( 
        <ProductStyle>
            {
                data.map(item => 
                <div className='product' key={item.id}>
                    <div className="title">
                        <h3>{item.title} </h3>
                    </div>
                    <div className="image"><img src={item.image} alt="" /></div>
                    <p className='price'>Price ${item.price} </p>
                    <div className="description">
                        
                        <p>{item.description}</p>
                        <div className="buttons">
                            <button className='buy'>Buy Now</button>
                            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
                        </div>
                    </div>
                </div> )
            }
        </ProductStyle>
    )
}

export default Product


