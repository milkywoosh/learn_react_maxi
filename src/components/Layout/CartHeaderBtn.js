import React from 'react';
// import CartLogo  from './CartLogo'
import { BsFillCartFill } from 'react-icons/bs'
import classes from './CartHeaderBtn.module.css';

function CartHeaderBtn() {

    return (
        <button className={classes.button}>
            <span >
                <BsFillCartFill className={classes.icon} />
            </span>
            <span >your cart</span>
            <span className={classes.badge}>{3}</span>
        </button>
    )
}

export default CartHeaderBtn;