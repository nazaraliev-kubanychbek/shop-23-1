import './header.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import cartIcon from './icons/cart-icon.svg';
import searchIcon from './icons/search-icon.svg';

const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <header className='header'>
            <div className="container header-container">
                <h1 className='header-logo'>
                    <Link to={'/'}>SHOP</Link>
                </h1>

                <div className="header-categories">
                    <Link to={'/'}>home</Link>
                    {
                        categories.map(item =>{
                            return <Link key={item} to={`category/${item}`}>{item}</Link>
                        })
                    }
                </div>

                <div className="header-right">
                    <Link to={'/'} >
                        <img src={searchIcon} alt="" />
                    </Link>
                    <Link to={'/cart'} >
                        <img src={cartIcon} alt="" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
