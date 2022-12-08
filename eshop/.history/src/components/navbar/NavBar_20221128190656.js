import './navbar.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const NavBar = () => {
    return (
        <div>
            <div className='headerLogo'>

            </div>
            <div className='searchBar'>

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
                    <ShoppingBasketIcon fontSize='large' />
                    <span className='nav_itemTwo'>0</span>
                </div>

            </div>
        </div>
    )
}

export default NavBar