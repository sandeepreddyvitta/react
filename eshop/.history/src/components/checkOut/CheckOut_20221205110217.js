import './checkout.scss'
import CheckOutProduct from './CheckOutProduct'

const CheckOut = () => {
    return (
        <div className='checkOut'>
            <div className='checkoutLeft'>
                <h2 className='title'>Your shopping Cart</h2>
                <CheckOutProduct />
            </div>
            <div className='checkoutRight'>

            </div>
        </div>
    )
}

export default CheckOut