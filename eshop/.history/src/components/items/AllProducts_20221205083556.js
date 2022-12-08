import './allproducts.scss'

const AllProducts = ({ title, img }) => {
    return (
        <div className='allProducts'>
            <div className='productInfo'>


                <p>{title}</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>30</strong></p>
                <div className='rating'>
                    ⭐⭐
                </div>
                <img src={img} alt='' className='productImage' />
                <button className='productButtons'>AddToBasket</button>
            </div>
        </div >
    )
}

export default AllProducts