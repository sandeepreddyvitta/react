import './navbar.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='headerLogo'>
                <StorefrontIcon fontSize='large' className='storeIcon' />
                <h2 className="title">eShoe</h2>
            </div>
            <div className='searchBar'>
                <input type="text" className='searchBarInput' />
                <SearchIcon className='searchIcon' />
            </div>
            <div className='userItems'>
                <div className='headerItem'>
                    <span className='nav_itemOne'>Hello Guest</span>
                    <span className='nav_itemTwo'>Sign In</span>
                </div>
                <div className='headerItem'>
                    <span className='nav_itemOne'>Your</span>
                    <span className='nav_itemTwo'>Shop</span>
                </div>
                <div className='headerItem'>
                    <div className='basket'>
                        <Link to="/checkout" style={{ textDecoration: "none" }}>
                            <ShoppingBasketIcon className='basketIcon' />
                            <span className='nav_itemTwo'>0</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar