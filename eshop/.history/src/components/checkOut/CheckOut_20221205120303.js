import './checkout.scss'
import CheckOutProduct from './CheckOutProduct'
import SubTotal from './SubTotal'

const CheckOut = () => {
    return (
        <div className='checkout'>
            <div className='checkoutLeft'>
                <h2 className='title'>Your shopping Cart</h2>
                <CheckOutProduct />
                <CheckOutProduct />
            </div>
            <div className='checkoutRight'>
                <SubTotal />
            </div>
        </div>
    )
}

export default CheckOut