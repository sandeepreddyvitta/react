import './checkoutproduct.scss'
import { useStateValue } from '../data/StateProvider';
const CheckOutProduct = ({ img, title, id, price, rating }) => {
    const [state, dispatch] = useStateValue();
    const removeToBasket = () => {
        dispatch({
            type: "Remove_To_Basket",
            id: id

        });
    }
    return (
        <div className='checkOutProduct' style={{ backgroundColor: "white", padding: "10px" }}>
            <img src={img} className='imageprod' alt='' style={{ borderRight: "1px solid lightgray" }} />
            <div className='info'>
                <p>{title}</p>
                <div className='price'>
                    <small>$:</small>
                    <strong>{price}</strong>
                </div>
                <div className='rating' style={{ display: "flex" }}>
                    {/* <p>{rating}</p> */}
                    {Array(rating)
                        .fill()
                        .map((_, i) =>
                            (<p>⭐</p>))
                    }
                </div>
                <button className='productButtons' onClick={removeToBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct