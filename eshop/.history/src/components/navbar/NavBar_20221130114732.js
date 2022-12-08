import './navbar.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='headerLogo'>
                <StorefrontIcon fontSize='large' />
                <h2>eShoe</h2>
            </div>
            <div className='searchBar'>
                <input type="text" className='searchBarInput' />
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
                    <ShoppingBasketIcon />
                    <span className='nav_itemTwo'>0</span>
                </div>

            </div>
        </div>
    )
}

export default NavBar