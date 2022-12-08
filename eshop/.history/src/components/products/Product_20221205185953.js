import { useStateValue } from '../data/StateProvider'
import './product.scss'

const Product = ({ title, price, img, rating }) => {
    const [state, dispatch] = useStateValue();

    return (
        <div className='product'>
            <div className='productInfo'>
                <p>{title}</p>
                <p className='productPrice'>
                    <small>$:</small>
                    <strong>{price}</strong></p>
                <div className='rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) =>
                            (<p>⭐</p>))
                    }
                </div>
            </div>
            <img src={img} alt='' className='productImage' />
            <button className='productButtons' onClick={addToBasket}>AddToBasket</button>
        </div>
    )
}

export default Product