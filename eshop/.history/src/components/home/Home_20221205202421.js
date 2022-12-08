import Product from '../products/Product';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <img src='https://cdn2.hubspot.net/hubfs/53/ecommerce%20marketing.jpg' alt='' className='homeImage' />
                <div className='homeRow'>
                    <Product
                        title="Sony Wh-Ch510 Bluetooth Wireless On Ear Headphones Up-To 35Hrs Playtime Lightweight, Type-C, Play/Pause Control, 30Mm Driver, Bt Version 5.0 & Voice Assistant Support For Mobiles"
                        price={11.96}
                        rating={5}
                        id={121}
                        img="https://m.media-amazon.com/images/I/41i+KMBAFjL._SY450_.jpg" />
                    <Product
                        title="Stylum Women's Gold Print Rayon Straight Kurta Pant Dupatta Set (Beige)"
                        price={11.96}
                        rating={5}
                        id={12451}
                        img="https://m.media-amazon.com/images/I/71srcjTeSBL._UY741_.jpg" />
                </div>
                <div className='homeRow'>
                    <Product
                        title="Apple iPhone 13 (128GB) - (Product) RED"
                        price={198}
                        rating={5}
                        id={12154}
                        img="https://m.media-amazon.com/images/I/71gm8v4uPBL._SX679_.jpg" />
                    <Product
                        title="Dennis Lingo Men's Slim Fit Shirt"
                        price={12}
                        id={121765}
                        rating={4}
                        img="https://imagescdn.allensolly.com/img/app/product/7/730479-8118347.jpg?auto=format&w=206" />
                    <Product
                        title="Puma Mens Ultimate Ease - Everglide Range Walking Shoe"
                        price={15}
                        rating={4}
                        id={8765}
                        img="https://m.media-amazon.com/images/I/61bSNDZWa8L._UY625_.jpg" />
                </div>
                <div className='homeRow'>
                    <Product
                        id={456}
                        title="American Tourister 32 Ltrs Grey Casual Backpack (AMT FIZZ SCH BAG 02 - GREY)"
                        price={15}
                        rating={3}
                        img="https://m.media-amazon.com/images/I/91PZUhSoOVL._SY741_.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Home