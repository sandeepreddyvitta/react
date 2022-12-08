import './product.scss'

const Product = () => {
    return (
        <div className='product'>
            <div className='productInfo'>
                <span>title</span>
                <span>price</span>
                <div className='rating'>
                    ⭐⭐
                </div>
            </div>
        </div>
    )
}

export default Product