import React, { useState, useEffect, useContext } from 'react';
// import CartLogo  from './CartLogo'
import { BsFillCartFill } from 'react-icons/bs'
import classes from './CartHeaderBtn.module.css';
import CartContext from '../store/cart-context';


function CartHeaderBtn(props) {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);


    return (
        <button className={btnClasses}
            onClick={props.showCart}
        >
            <span >
                <BsFillCartFill className={classes.icon} />
            </span>
            <span >your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default CartHeaderBtn;