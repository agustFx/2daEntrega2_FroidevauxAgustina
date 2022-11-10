import { Link } from 'react-router-dom';
import './cartWidge.css'

const CartWidge = () => {
    return (
        <>
        <Link className="nav-link" to={'/carrito'}>
        <button className='btn btn-secondary'><img src="https://icongr.am/material/cart-plus.svg?size=42&color=ffffff" alt="cart"/></button>
        </Link>
        </>
    );
}

export default CartWidge;
