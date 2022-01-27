import React, { Fragment } from 'react';
import headerImg from "../assets/meals.jpg";
import CartHeaderBtn from './CartHeaderBtn';
import classes from './Header.module.css';

function Header() {

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <CartHeaderBtn />
            </header>
            <div className={classes.mainImage}>
                <img src={headerImg} alt=" header description"/>
                {/* if get picture from URL */}
                {/* <img src="https://someURL"/> */}
            </div>
        </Fragment>
    )
}

export default Header