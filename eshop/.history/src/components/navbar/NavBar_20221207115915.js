import './navbar.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
import { useStateValue } from '../data/StateProvider';
const NavBar = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='navBar'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className='headerLogo'>
                    <StorefrontIcon fontSize='large' className='storeIcon' />
                    <h2 className="title">eSHOP</h2>
                </div>

            </Link>
            <div className='searchBar'>
                <input type="text" className='searchBarInput' />
                <SearchIcon className='searchIcon' />
            </div>
            <div className='userItems'>
                <Link to='/login' style={{ textDecoration: "none" }}>
                    <div className='headerItem'>
                        <span className='nav_itemOne'>Hello Guest</span>
                        <span className='nav_itemTwo'>Sign In</span>
                    </div>
                </Link>
                <div className='headerItem'>
                    <span className='nav_itemOne'>Your</span>
                    <span className='nav_itemTwo'>Shop</span>
                </div>
                <div className='headerItem'>
                    <Link to="/checkout" style={{ textDecoration: "none" }}>
                        <div className='basket'>
                            <ShoppingBasketIcon className='basketIcon' />
                            <span className='nav_itemTwo'>{basket.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default NavBar