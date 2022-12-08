import './product.scss'

const Product = () => {
    return (
        <div className='product'>
            <div className='productInfo'>
                <p>Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt Version 5.0 & Voice Assistant Support For Mobiles
                </p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>30</strong></p>
                <div className='rating'>
                    ⭐⭐
                </div>
            </div>
            <img src='https://m.media-amazon.com/images/I/41i+KMBAFjL._SY450_.jpg' alt='' className='productImage' />
            <button className='productButtons'>AddToBasket</button>
        </div>
    )
}

export default Product