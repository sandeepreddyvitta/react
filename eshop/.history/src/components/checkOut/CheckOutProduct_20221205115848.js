import './checkoutproduct.scss'

const CheckOutProduct = () => {
    return (
        <div className='checkOutProduct'>
            <img src='https://m.media-amazon.com/images/I/41i+KMBAFjL._SY450_.jpg' className='imageprod' />
            <div className='info'>
                <p>Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt Version 5.0 & Voice Assistant Support For Mobiles</p>
                <div className='price'>
                    <small>$:</small>
                    <strong>12</strong>
                </div>
                <div className='rating'>
                    <p>⭐⭐⭐⭐</p>
                </div>
                <button className='productButtons'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct