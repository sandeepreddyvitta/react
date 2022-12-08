import './product.scss'

const Product = () => {
    return (
        <div className='product'>
            <div className='productInfo'>
                <p>title</p>
                <p>price:$30</p>
                <div className='rating'>
                    ⭐⭐
                </div>
            </div>
            <img src='https://m.media-amazon.com/images/I/41i+KMBAFjL._SY450_.jpg' alt='' className='productImage' />
            <button>AddToBasket</button>
        </div>
    )
}

export default Product