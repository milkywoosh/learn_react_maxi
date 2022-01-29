import React, { Fragment } from 'react';
import headerImg from "../assets/meals.jpg";
import CartHeaderBtn from './CartHeaderBtn';
import classes from './Header.module.css';

function Header(props) {

    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
            <div>
                <button
                    onClick={'#'}
                >Other Modal</button>
            </div>
                <CartHeaderBtn showCart={props.showCart}/>
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