import './checkoutproduct.scss'

const CheckOutProduct = ({ img, title, id, price, rating }) => {
    return (
        <div className='checkOutProduct' style={{ backgroundColor: "white", padding: "10px" }}>
            <img src={img} className='imageprod' style={{ borderRight: "1px solid lightgray" }} />
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
                <button className='productButtons'>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckOutProduct