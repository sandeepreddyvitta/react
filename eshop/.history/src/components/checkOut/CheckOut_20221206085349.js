import './checkout.scss'
import CheckOutProduct from './CheckOutProduct'
import SubTotal from './SubTotal'
import { useStateValue } from '../data/StateProvider'

const CheckOut = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkoutLeft'>
                <h2 className='title'>Your shopping Cart</h2>
                {
                    basket.map(i => (
                        <CheckOutProduct
                            id={i.id}
                            title={i.title}
                            img={i.img}
                            rating={i.rating}
                            price={i.price} />
                    ))
                }
            </div>
            <div className='checkoutRight'>
                <SubTotal />
            </div>
        </div>
    )
}

export default CheckOut