import './subtotal.scss'
import CurrencyFormat from 'react-currency-format'

const SubTotal = () => {
    return (
        <div className='subtotal'>
            <CurrencyFormat>
                renderText={(value) => (
                    <>
                        <p>SubTotal(0 items):<strong>$0</strong></p>
                    </>
                )}
            </CurrencyFormat>
        </div>
    )
}

export default SubTotal