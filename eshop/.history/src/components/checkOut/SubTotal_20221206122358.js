import './subtotal.scss'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../data/StateProvider'
import { getTotlaAmount } from '../data/reducer'
const SubTotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>SubTotal({basket.length} items):<strong>${getTotlaAmount}</strong></p>
                        <small className='gift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotlaAmount(basket)}
                displayType={"text"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal