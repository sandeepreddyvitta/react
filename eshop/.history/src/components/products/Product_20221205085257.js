import AllProducts from '../items/AllProducts'
import './product.scss'

const Product = () => {
    const items = [
        {
            id: 1,
            title: "Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt Version 5.0 & Voice Assistant Support For Mobiles",
            img: "https://m.media-amazon.com/images/I/41i+KMBAFjL._SY450_.jpg",
        }
        , {
            id: 2,
            title: "Apple iPhone 13 (128GB) - (Product) RED",
            img: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg",
        }
        , {
            id: 3,
            title: "Dennis Lingo Men's Slim Fit Shirt",
            img: "Dennis Lingo Men's Slim Fit Shirt",
        }
        , {
            id: 4,
            title: "Puma Mens Ultimate Ease - Everglide Range Walking Shoe",
            img: "https://m.media-amazon.com/images/I/61bSNDZWa8L._UY625_.jpg"
        }
        , {
            id: 5,
            title: "Stylum Women's Gold Print Rayon Straight Kurta Pant Dupatta Set (Beige)",
            img: "https://m.media-amazon.com/images/I/71srcjTeSBL._UY741_.jpg"
        }
    ]
    return (
        <div className='product'>
            {/* {items.map(item =>
                <AllProducts key={item.id}
                    title={item.title}
                    img={item.img}
                />)} */}
            <div className='productInfo'>
                <p>Stylum Women's Gold Print Rayon Straight Kurta Pant Dupatta Set (Beige)</p>
                <p className='productPrice'>
                    <small>$</small>
                    <strong>30</strong></p>
                <div className='rating'>
                    ⭐⭐
                </div>
            </div>
            <img src='https://m.media-amazon.com/images/I/71srcjTeSBL._UY741_.jpg' alt='' className='productImage' />
            <button className='productButtons'>AddToBasket</button>
        </div>
    )
}

export default Product