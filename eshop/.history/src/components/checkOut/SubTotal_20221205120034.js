import './subtotal.scss'
import CurrencyFormat from 'react-currency-format'

const SubTotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>SubTotal(0 items):<strong>$0</strong></p>
                        <small className='gift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal