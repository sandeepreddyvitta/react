import React from 'react'

const CheckOutProduct = () => {
    return (
        <div className='checkOutProduct'>
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
            <button className='productButtons'>AddToBasket</button>
        </div>
    )
}

export default CheckOutProduct