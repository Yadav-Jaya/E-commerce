import ProductStyle from './ProductStyle'
const Product = ({loading,data}) => {
    if(loading){
        return (
            <div style={{position:'absolute', top:'50vh', left:'50vw'}}>
                <h1>Loading....</h1>
                <p>please wait</p>
            </div>
        )
    }
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
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div> )
            }
        </ProductStyle>
    )
}

export default Product


