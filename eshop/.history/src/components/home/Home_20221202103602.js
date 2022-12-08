import Product from '../products/Product';
import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <img src='https://cdn2.hubspot.net/hubfs/53/ecommerce%20marketing.jpg' alt='' className='homeImage' />
                <div className='homeRow'>
                    <Product />
                </div>
            </div>
            )
}

            export default Home