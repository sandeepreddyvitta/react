import React from 'react'

const AllProducts = ({ title, img }) => {
    return (
        <div className='allProducts'>
            <p>{title}</p>
            <p className='productPrice'>
                <small>$</small>
                <strong>30</strong></p>
            <div className='rating'>
                ⭐⭐
            </div>
            <img src={img} alt='' className='productImage' />
            <button className='productButtons'>AddToBasket</button>
        </div >
    )
}

export default AllProducts