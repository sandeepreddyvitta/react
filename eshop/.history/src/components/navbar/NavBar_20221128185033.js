import './navbar.scss'

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
                    <span className='nav_itemTwo'>Sgi</span>
                </div>
                <div className='headerItem'>
                    <span className='nav_itemOne'></span>
                    <span className='nav_itemTwo'></span>
                </div>
                <div className='headerItem'>
                    <span className='nav_itemOne'></span>
                    <span className='nav_itemTwo'></span>
                </div>

            </div>
        </div>
    )
}

export default NavBar