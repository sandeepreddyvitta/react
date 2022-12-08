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
            <img src='https://m.media-amazon.com/images/I/41i+KMBAFjL._SY450_.jpg' alt='' className='productImage' />
        </div>
    )
}

export default Product